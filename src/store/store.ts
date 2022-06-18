import { configureStore } from "@reduxjs/toolkit";
import { ProductModel } from "../model/product";
import { productReducer } from "../redux/action.reducer";

export interface iStore {
  product: Array<ProductModel>;
}

export const preloadedState = {
  products: [],
};

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
