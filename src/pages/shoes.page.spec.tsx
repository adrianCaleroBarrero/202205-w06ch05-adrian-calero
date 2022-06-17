import { render, screen } from "@testing-library/react";
import ShoesPage from "./shoes.page";

describe("Given the component HoemPage", () => {
  describe("When i render the component", () => {
    test("Then i should be rendered", () => {
      render(<ShoesPage />);
      expect(screen.getByText(/Zapatillas/i)).toBeInTheDocument();
    });
  });
});
