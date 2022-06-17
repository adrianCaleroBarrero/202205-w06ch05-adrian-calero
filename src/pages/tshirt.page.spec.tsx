import { render, screen } from "@testing-library/react";
import TshirtPage from "./tshirt.page";

describe("Given the component HoemPage", () => {
  describe("When i render the component", () => {
    test("Then i should be rendered", () => {
      render(<TshirtPage />);
      expect(screen.getByText(/Camisetas/i)).toBeInTheDocument();
    });
  });
});
