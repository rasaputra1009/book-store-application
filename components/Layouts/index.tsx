import React from "react";
import Navbar from "../Navbar";
import style from "./style.module.scss";

export default function Layouts({ children }) {
  return (
    <div className={style.main}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
