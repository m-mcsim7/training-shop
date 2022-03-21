import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsApiSlice",
  initialState: {
    productsApi: {},
  },
  reducers: {
    addProductsApiInStore: (state, action) => {
      state.productsApi = {...state.productsApi, ...action.payload}

  },
},
});

export const {
   addProductsApiInStore
} = productsSlice.actions



export default productsSlice.reducer;
