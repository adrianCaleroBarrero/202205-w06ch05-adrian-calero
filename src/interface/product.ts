export enum type {
  "camisetas" = "camisetas",
  "zapatillas" = "zapatillas",
}

export interface iProduct {
  id?: number;
  name: string;
  brand: string;
  price: number;
  detail: string;
  stock: number;
  type: type;
  discount: boolean;
}
