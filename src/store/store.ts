import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../redux/action.reducer";

export const preloadedState = {
  products: [],
};

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
