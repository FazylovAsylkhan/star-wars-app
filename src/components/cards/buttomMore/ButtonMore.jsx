/* eslint-disable prefer-destructuring */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import buttonStyle from "../../../scss/button.module.scss";

function ButtonMore({ results: list }) {
  let urlPersonalPage;
  const buttonClass = `${buttonStyle.button} ${buttonStyle.primary}`;
  if (list.length) {
    const url = list[list.length - 1][1];
    const arr = url.split("/");
    urlPersonalPage = arr[arr.length - 2];
  }
  const isMainPage = useLocation().pathname.split("/").length < 3;

  return isMainPage ? (
    <button className={buttonClass} type="button">
      <Link className={buttonStyle.link} to={urlPersonalPage}>
        More ...
      </Link>
    </button>
  ) : (
    false
  );
}

export default ButtonMore;
