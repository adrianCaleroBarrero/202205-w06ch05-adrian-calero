import { AnyAction } from "@reduxjs/toolkit";
import { iProduct, type } from "../interface/product";
import * as ac from "./action.creators";
import { productReducer } from "./action.reducer";

describe("Given the reducer", () => {
  const mockProduct = {
    id: 1,
    name: "zapatillas",
    brand: "nike",
    price: 120,
    detail: "lorem",
    stock: 80,
    type: type.zapatillas,
    discount: false,
  };

  describe("When i use the function load", () => {
    test("Then it should load the mockProduct", () => {
      const initialState: Array<iProduct> = [];
      const newState = productReducer(
        initialState,
        ac.loadProductAction([mockProduct])
      );

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([mockProduct]);
    });
  });
  describe("When i use the function add", () => {
    test("Then it should add the mockProduct2", () => {
      const initialState: Array<iProduct> = [mockProduct];
      const mockProduct2 = { ...mockProduct, id: 2, brand: "adidas" };
      const newState = productReducer(
        initialState,
        ac.addProductAction(mockProduct2)
      );

      expect(newState).toHaveLength(2);
      expect(newState).toStrictEqual([mockProduct, mockProduct2]);
    });
  });
  describe("When i use the function update/modify", () => {
    test("Then it should modify the mockProduct", () => {
      const initialState: Array<iProduct> = [mockProduct];
      const mockProductModify = { ...mockProduct, price: 100, discount: true };
      const newState = productReducer(
        initialState,
        ac.updateProductAction(mockProductModify)
      );

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([mockProductModify]);
    });
  });
  describe("When i use the function delete", () => {
    test("Then it should delete the mockProduct", () => {
      const initialState: Array<iProduct> = [mockProduct];
      const newState = productReducer(
        initialState,
        ac.deleteProductAction(mockProduct)
      );

      expect(newState).toHaveLength(0);
    });
  });
  describe("When i use the function for default", () => {
    test("Then it should be rthe same mock", () => {
      const initialState: Array<iProduct> = [mockProduct];
      const noAction = {} as AnyAction;
      const newState = productReducer(initialState, noAction);

      expect(newState).toEqual(initialState);
    });
  });
});
