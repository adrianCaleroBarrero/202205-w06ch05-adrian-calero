import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home.page";
import { Header } from "./header";

describe("Given the component header", () => {
  const mockOptions = [
    { path: "", label: "Home - footlooker", page: <HomePage /> },
  ];
  describe("When i render the component", () => {
    test("Then it should be rendered", () => {
      render(
        <BrowserRouter>
          <Header options={mockOptions} />
        </BrowserRouter>
      );
      expect(screen.getByText(/FootLooker/)).toBeInTheDocument();
      expect(screen.getByText(/Home - footlooker/)).toBeInTheDocument();
    });
  });
});
