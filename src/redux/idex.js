import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import productsApiSliceReducer from "./productsApi/reducer";
import { productsApi } from "./productsApi/productsApi";
import { emailApi } from "./buttonEmail/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsApiSlice: productsApiSliceReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, emailApi.middleware),
});
