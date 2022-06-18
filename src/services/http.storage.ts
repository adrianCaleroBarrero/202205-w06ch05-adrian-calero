import { iProduct } from "../interface/product";

export class HttpStoreProduct {
  url: string;
  constructor() {
    this.url = "http://localhost:3542/products";
  }
  getAllProducts(): Promise<Array<iProduct>> {
    return fetch(this.url).then((resp) => {
      return resp.json();
    });
  }

  addProduct(product: iProduct): Promise<iProduct> {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
    }).then((resp) => resp.json());
  }

  updateProduct(product: iProduct): Promise<iProduct> {
    return fetch(this.url + `/${product.id}`, {
      method: "PATCH",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
  }

  deleteProduct(product: iProduct): Promise<number> {
    return fetch(this.url + `/${product.id}`, {
      method: "DELETE",
    }).then((resp) => resp.status);
  }
}
