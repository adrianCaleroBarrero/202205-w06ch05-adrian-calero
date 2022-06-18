import React, { ReactElement } from "react";
import { aMenuItems } from "../../interface/menu";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export function Layer({
  options,
  children,
}: {
  options: aMenuItems;
  children: ReactElement;
}) {
  return (
    <>
      <Header options={options} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
