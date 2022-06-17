import { iProduct, type } from "../interface/product";

export class ProductModel implements iProduct {
  id: number;
  static generateId(): number {
    return Math.ceil(Math.random() * 100_000);
  }
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public detail: string,
    public stock: number,
    public type: type,
    public discount: boolean
  ) {
    this.id = ProductModel.generateId();
  }
}
