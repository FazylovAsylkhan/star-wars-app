/* eslint-disable prefer-destructuring */
import React from "react";
import { Link } from "react-router-dom";
import buttonStyle from "../../../scss/button.module.scss";
import { getIdPageFrom } from "../../../utils";

function ButtonMore({ results: list }) {
  const idPage = getIdPageFrom(list);
  const buttonClass = `${buttonStyle.button} ${buttonStyle.primary}`;

  return (
    <button className={buttonClass} type="button">
      <Link className={buttonStyle.link} to={idPage}>
        More ...
      </Link>
    </button>
  );
}

export default ButtonMore;
