import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ShoesPage from "./shoes.page";

describe("Given the component HoemPage", () => {
  describe("When i render the component", () => {
    test("Then i should be rendered", () => {
      render(
        <Provider store={store}>
          <ShoesPage />
        </Provider>
      );
      expect(screen.getByText(/Zapatillas/i)).toBeInTheDocument();
    });
  });
});
