import { render, screen } from "@testing-library/react";
import { CardTshirt } from "./card.tshirt";

describe("Given the component CardShoe", () => {
  const mockProduct = {
    type: "camisetas",
    name: "oversize",
    brand: "nike",
    price: 150,
    detail: "test",
    stock: 1,
    discount: false,
  };
  describe("When i render ", () => {
    test("Then it should be rendered", () => {
      render(<CardTshirt prod={mockProduct} />);

      expect(screen.getByText(/oversize/i)).toBeInTheDocument();
    });
  });

  describe("When i render other type ", () => {
    test("Then it should don't be rendered", () => {
      const wrongMockProduct = { ...mockProduct, type: "zapatillas" };
      render(<CardTshirt prod={wrongMockProduct} />);

      expect(screen.queryByText(/oversize/i)).not.toBeInTheDocument();
    });
  });

  describe("When i render with discount ", () => {
    test("Then it should be rendered the icon", () => {
      const discountMockProduct = { ...mockProduct, discount: true };
      render(<CardTshirt prod={discountMockProduct} />);

      expect(screen.getByText(/🎗️/i)).toBeInTheDocument();
    });
  });
});
