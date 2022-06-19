import { render, screen } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { HttpStoreProduct } from "../../services/http.storage";
import { store } from "../../store/store";
import { List } from "./list";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("../../services/http.storage");
const preloadedState = {
  products: [],
};

const useDispatchMock = useDispatch as jest.Mock;

const mockDispatch = jest.fn();

describe("Given the component List", () => {
  beforeEach(() => {
    HttpStoreProduct.prototype.getAllProducts = jest.fn().mockResolvedValue([
      {
        type: "zapatillas",
        name: "deportiva",
        brand: "nike",
        price: 150,
        detail: "test",
        stock: 1,
        discount: false,
      },
    ]);
    useDispatchMock.mockImplementation(mockDispatch);
  });
  describe("When i render the component", () => {
    test("Then it should be rendered", async () => {
      render(
        <Provider store={store}>
          <List page="shoes" />
        </Provider>
      );
    });
  });
});
