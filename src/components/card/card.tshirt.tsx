import { iProduct } from "../../interface/product";

export function CardTshirt({ prod }: { prod: iProduct }) {
  return prod.type === "camisetas" ? (
    <li>
      <img src="./img/camiseta.png" alt="prenda" />
      <p>{prod.name + " - " + prod.brand}</p>
      <p>Precio: {prod.price}€</p>
      <p>Quedan: {prod.stock}</p>
      <p>{prod.discount ? "🎗️" : ""}</p>
    </li>
  ) : (
    <div></div>
  );
}
