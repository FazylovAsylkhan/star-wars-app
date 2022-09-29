/* eslint-disable prefer-destructuring */
import React from "react";
import { Link } from "react-router-dom";
import buttonStyle from "../../../scss/button.module.scss";

function ButtonMore({ index }) {
  const buttonClass = `${buttonStyle.button} ${buttonStyle.primary}`;

  return (
    <button className={buttonClass} type="button">
      <Link className={buttonStyle.link} to={`${index + 1}`}>
        More ...
      </Link>
    </button>
  );
}

export default ButtonMore;
