import { render, screen } from "@testing-library/react";
import { CardShoe } from "./card.shoe";

describe("Given the component CardShoe", () => {
  const mockProduct = {
    type: "zapatillas",
    name: "deportiva",
    brand: "nike",
    price: 150,
    detail: "test",
    stock: 1,
    discount: false,
  };
  describe("When i render ", () => {
    test("Then it should be rendered", () => {
      render(<CardShoe prod={mockProduct} />);

      expect(screen.getByText(/deportiva/i)).toBeInTheDocument();
    });
  });
});
