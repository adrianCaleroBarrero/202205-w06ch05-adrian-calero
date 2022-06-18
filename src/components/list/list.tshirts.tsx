import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iProduct } from "../../interface/product";
import { HttpStoreProduct } from "../../services/http.storage";
import * as ac from "../../redux/action.creators";
import { iStore } from "../../store/store";
import { CardTshirt } from "../card/card.tshirt";

export function ListTshirts() {
  const api = new HttpStoreProduct();
  const products = useSelector((state: iStore) => state.product as iProduct[]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.getAllProducts().then((resp) => dispatch(ac.loadProductAction(resp)));
  }, [dispatch]);

  return (
    <ul>
      {products.map((prod) => (
        <>
          <CardTshirt key={prod.id} prod={prod} />
        </>
      ))}
    </ul>
  );
}
