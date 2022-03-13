import { createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      //Необходимо добавить кол-во товара перед пуш
      state.itemsInCart.push(action.payload);
      
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
    },
    addQuantity: (state, action) => {
      // сделать функцию для увеличения кол-ва товара в корзине
    },
  },
});

export const { setItemInCart, deleteItemFromCart, addQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
