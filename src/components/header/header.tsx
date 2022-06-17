import { aMenuItems } from "../../interface/menu";
import { Menu } from "../menu/menu";

export function Header({ options }: { options: aMenuItems }) {
  return (
    <header>
      <h1>FootLooker</h1>
      <Menu options={options}></Menu>
    </header>
  );
}
