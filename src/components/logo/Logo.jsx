import React from "react";
import s from "./logo.module.scss";

function Logo() {
  return (
    <h2 className={s.logo}>
      <span className={s.symbol}>S</span>tar
      <span className={s.symbol}>W</span>ars
      <span className={s.symbol}>A</span>pp
    </h2>
  );
}

export default Logo;
