import React from "react";
import { Link } from "react-router-dom";
import s from "./card.module.scss";

function Card({ data, list, index }) {
  const { name, url } = data.results[index];
  const arr = url.split("/");
  const urlPersonalPage = arr[arr.length - 2];

  return (
    <>
      <br />
      {list && (
        <ul className={s.list}>
          {list.map(([props, value]) => (
            <li key={props}>
              <b>{props}: </b>
              {value}
            </li>
          ))}
          <Link to={urlPersonalPage}>{name}</Link>
        </ul>
      )}
    </>
  );
}

export default Card;
