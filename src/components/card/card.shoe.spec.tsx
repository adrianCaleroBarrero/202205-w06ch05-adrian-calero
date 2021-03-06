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

  describe("When i render other type ", () => {
    test("Then it should don't be rendered", () => {
      const wrongMockProduct = { ...mockProduct, type: "camisetas" };
      render(<CardShoe prod={wrongMockProduct} />);

      expect(screen.queryByText(/deportiva/i)).not.toBeInTheDocument();
    });
  });

  describe("When i render with discount ", () => {
    test("Then it should be rendered the icon", () => {
      const discountMockProduct = { ...mockProduct, discount: true };
      render(<CardShoe prod={discountMockProduct} />);

      expect(screen.getByText(/🎗️/i)).toBeInTheDocument();
    });
  });
});
