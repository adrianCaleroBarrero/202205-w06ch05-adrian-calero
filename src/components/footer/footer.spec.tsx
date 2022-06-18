import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Given the component Footer", () => {
  describe("When i render the component", () => {
    test("Then it should be rendered", () => {
      render(<Footer />);

      expect(screen.getByText(/Github/i)).toBeInTheDocument();
    });
  });
});
