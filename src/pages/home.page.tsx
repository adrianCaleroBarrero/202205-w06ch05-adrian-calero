export function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <form>
        <select name="type" id="">
          <option value="tipo">tipo</option>
          <option value="zapatillas">zapatillas</option>
          <option value="camisetas">camisetas</option>
        </select>
        <input type="text" placeholder="Nombre del Producto" />
        <input type="text" placeholder="Marca del pructo" />
        <input type="number" name="price" id="" placeholder="Precio" />
        <textarea
          name="detail"
          id=""
          cols={30}
          rows={10}
          placeholder="Detalles del producto..."
        ></textarea>
        <input type="number" name="stock" id="" placeholder="Stock" />
        <label htmlFor="">¿Descuento?</label>
        <input type="checkbox" name="" id="" />
      </form>
    </>
  );
}
export default HomePage;
