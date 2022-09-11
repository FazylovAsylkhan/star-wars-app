/* eslint-disable prefer-destructuring */
import React from "react";
import { Link, useParams } from "react-router-dom";
import s from "./card.module.scss";

function Card({ results: list }) {
  let name;
  let url;
  let arr;
  let urlPersonalPage;
  const { peopleId } = useParams();

  if (list.length) {
    name = list[0][1];
    url = list[list.length - 1][1];
    arr = url.split("/");
    urlPersonalPage = arr[arr.length - 2];
  }

  return (
    <>
      <br />
      {list.length > 0 && (
        <ul className={s.list}>
          {list.map(([props, value]) => (
            <li key={props}>
              <b>{props}: </b>
              {value}
            </li>
          ))}
          {!peopleId ? <Link to={urlPersonalPage}>{name}</Link> : false}
        </ul>
      )}
    </>
  );
}

export default Card;
