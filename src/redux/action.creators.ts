import { createAction } from "@reduxjs/toolkit";
import { iProduct } from "../interface/product";
import { actionTypes } from "./action.types";

export const loadProductAction = createAction<iProduct[]>(
  actionTypes["product@load"]
);
export const addProductAction = createAction<iProduct>(
  actionTypes["product@add"]
);
export const updateProductAction = createAction<iProduct>(
  actionTypes["product@update"]
);
export const deleteProductAction = createAction<iProduct>(
  actionTypes["product@delete"]
);
