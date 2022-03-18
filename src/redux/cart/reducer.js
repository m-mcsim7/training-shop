import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],    
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push({ ...action.payload, quantity: 1 });
    },

    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
    },

    addQuantity: (state, action) => {
      state.itemsInCart.map((item) =>
        JSON.stringify(item) === JSON.stringify(action.payload)
          ? (item.quantity += 1)
          : item.quantity
      );
    },
    delQuantity: (state, action) => {
      state.itemsInCart.map((item) =>
        JSON.stringify(item) === JSON.stringify(action.payload)
          ? (item.quantity -= 1)
          : item.quantity
      );
    },
    removeToCard: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) =>
          [item.id, item.images[0].color, item.sizes[0]].join("") !==
          action.payload
      );
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  addQuantity,
  delQuantity,
  removeToCard,
} = cartSlice.actions;
export default cartSlice.reducer;
