import { List } from "../components/list/list";
import "./shoes.page.css";

export function ShoesPage() {
  return (
    <>
      <h2>Lista de Zapatillas</h2>
      <List page={"shoes"} />
    </>
  );
}

export default ShoesPage;
