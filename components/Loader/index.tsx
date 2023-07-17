import React from "react";
import style from "./style.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loader;
