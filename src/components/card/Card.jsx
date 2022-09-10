import React from "react";
import s from "./card.module.scss";

function Card({ data }) {
  return (
    <>
      <br />
      {data && (
        <ul className={s.list}>
          {data.map(([key, value]) => (
            <li key={value}>
              <b>{key}: </b>
              {value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Card;
