import { render, screen } from "@testing-library/react";
import HomePage from "./home.page";

describe("Given the component HoemPage", () => {
  describe("When i render the component", () => {
    test("Then i should be rendered", () => {
      render(<HomePage />);
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
  });
});
