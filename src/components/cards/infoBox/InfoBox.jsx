/* eslint-disable prefer-destructuring */
import React from "react";
import s from "./infoBox.module.scss";

function InfoBox({ results }) {
  const list = results.filter((item, index) => index < 8);

  return (
    list.length > 0 && (
      <ul className={s.list}>
        {list.map(([props, value]) => (
          <li key={props}>
            <b>{props}: </b>
            {value}
          </li>
        ))}
      </ul>
    )
  );
}

export default InfoBox;
