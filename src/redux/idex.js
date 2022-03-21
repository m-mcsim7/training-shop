import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import productsApiSliceReducer from "./productsApi/reducer"
import {productsApi} from "./productsApi/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsApiSlice: productsApiSliceReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});


