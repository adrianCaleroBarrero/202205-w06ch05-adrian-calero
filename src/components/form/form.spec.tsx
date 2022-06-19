import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { iProduct } from "../../interface/product";
import { HttpStoreProduct } from "../../services/http.storage";
import { render } from "../../services/test.utils";
import { store } from "../../store/store";
import { Form } from "./form";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("../../services/http.storage");
const preloadedState = {
  products: [],
};

const useDispatchMock = useDispatch as jest.Mock;
const mockDispatch = jest.fn().mockName("mockDispatch");

describe("Given the component Form", () => {
  beforeEach(() => {
    HttpStoreProduct.prototype.addProduct = jest.fn().mockResolvedValue({});

    useDispatchMock.mockImplementation(() => mockDispatch);
  });
  describe("When i render the component", () => {
    test("Then it should be rendered", () => {
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      expect(screen.getByText(/Descuento/i)).toBeInTheDocument();
    });
  });

  describe("When i press the button submit", () => {
    test("Then it should been called the function", async () => {
      render(<Form />, { preloadedState, store });

      const addButton = screen.getByRole("button");

      fireEvent.click(addButton);
      expect(useDispatch).toHaveBeenCalled();
      expect(HttpStoreProduct.prototype.addProduct).toHaveBeenCalled();
      expect(await mockDispatch).toHaveBeenCalled();
    });
  });
});
