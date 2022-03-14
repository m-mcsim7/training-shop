import { createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
       console.log(action.payload)
      state.itemsInCart.push({...action.payload, quantity:1});
      
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
    },

    addQuantity: (state, action) => {
      state.itemsInCart.map(
         (item) => JSON.stringify(item) === JSON.stringify(action.payload) ?
         item.quantity += 1 
      : item.quantity 
      );
    },
    delQuantity: (state, action) => {
      state.itemsInCart.map(
         (item) => JSON.stringify(item) === JSON.stringify(action.payload) ?
         item.quantity -= 1 
      : item.quantity 
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart, addQuantity, delQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
