import { iProduct } from "../../interface/product";

export function CardShoe({ prod }: { prod: iProduct }) {
  return prod.type === "zapatillas" ? (
    <li>
      <img src="./img/pngwing.com.png" alt="prenda" />
      <p>{prod.name + " - " + prod.brand}</p>
      <p>Precio: {prod.price}€</p>
      <p>Quedan: {prod.stock}</p>
      <p>{prod.discount ? "🎗️" : ""}</p>
    </li>
  ) : (
    <div></div>
  );
}
