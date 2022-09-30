import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./button.module.scss";

function Button({ children, type, callback = null, url = null }) {
  const getButton = (classBtn = "") => (
    <button
      onClick={() => callback()}
      className={`${s.button} ${classBtn}`}
      type="button"
    >
      {children}
    </button>
  );

  switch (type) {
    case "link":
      return (
        <Link className={`${s.button} ${s.primary}`} to={url}>
          {children}
        </Link>
      );
    case "navLink":
      return (
        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive ? `${s.navlink} ${s.active}` : s.navlink
          }
        >
          {children}
        </NavLink>
      );
    case "pagination":
      return getButton(s.light);
    case "error":
      return getButton(s.danger);
    default:
      return getButton();
  }
}

export default Button;
