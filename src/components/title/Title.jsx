import React from "react";
import s from "./title.module.scss";

function Title({ text }) {
  const arrLetters = text.split("");
  const FirstSymbol = arrLetters[0].toUpperCase();
  arrLetters.splice(0, 1);
  const title = arrLetters.join("");
  return (
    <h1 className={s.title}>
      <span className={s.symbol}>{FirstSymbol}</span>
      {title}
    </h1>
  );
}

export default Title;
