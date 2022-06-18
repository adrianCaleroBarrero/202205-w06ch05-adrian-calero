import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import HomePage from "./home.page";

describe("Given the component HomePage", () => {
  describe("When i render the component", () => {
    test("Then i should be rendered", () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
  });
});
