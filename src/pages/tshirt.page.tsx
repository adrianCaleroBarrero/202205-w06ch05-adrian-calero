import { List } from "../components/list/list";
import "./tshirt.page.css";

export function TshirtPage() {
  return (
    <>
      <h2>Lista de Camisetas</h2>
      <List page={"tshirt"} />
    </>
  );
}

export default TshirtPage;
