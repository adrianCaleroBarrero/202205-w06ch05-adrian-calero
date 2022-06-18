import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as ac from "../../redux/action.creators";
import { ProductModel } from "../../model/product";
import { HttpStoreProduct } from "../../services/http.storage";

export function Form() {
  const api = new HttpStoreProduct();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    brand: "",
    price: 0,
    detail: "",
    stock: 0,
    discount: false,
  });

  function handleSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    const newProduct: ProductModel = {
      ...new ProductModel(
        formData.name,
        formData.brand,
        formData.price,
        formData.detail,
        formData.stock,
        formData.type,
        formData.discount
      ),
    };

    api.addProduct(newProduct).then((resp) => {
      dispatch(ac.addProductAction(newProduct));
      setFormData({
        type: "",
        name: "",
        brand: "",
        price: 0,
        detail: "",
        stock: 0,
        discount: false,
      });
    });
  }

  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    setFormData({ ...formData, [element.name]: element.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="type" id="" value={formData.type} onChange={handleChange}>
        <option value="none">tipo</option>
        <option value="zapatillas">zapatillas</option>
        <option value="camisetas">camisetas</option>
      </select>
      <input
        type="text"
        name="name"
        placeholder="Nombre del Producto"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="brand"
        placeholder="Marca del producto"
        value={formData.brand}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        id=""
        placeholder="Precio"
        value={formData.price}
        onChange={handleChange}
      />
      <textarea
        name="detail"
        id=""
        cols={30}
        rows={10}
        placeholder="Detalles del producto..."
        value={formData.detail}
        onChange={handleChange}
      ></textarea>
      <input
        type="number"
        name="stock"
        id=""
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />
      <label htmlFor="">¿Descuento?</label>
      <input
        type="checkbox"
        name="discount"
        id=""
        checked={formData.discount}
        onChange={handleChange}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
