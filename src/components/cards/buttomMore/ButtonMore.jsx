/* eslint-disable prefer-destructuring */
import React from "react";
import { Link } from "react-router-dom";
import buttonStyle from "../../../scss/button.module.scss";

function ButtonMore({ idPersonalPage }) {
  const buttonClass = `${buttonStyle.button} ${buttonStyle.primary}`;

  return (
    <button className={buttonClass} type="button">
      <Link className={buttonStyle.link} to={`${idPersonalPage}`}>
        More ...
      </Link>
    </button>
  );
}

export default ButtonMore;
