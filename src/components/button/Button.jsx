import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./button.module.scss";

const getButton = (children, callback, classBtn = "", isDisable = false) => (
  <button
    onClick={() => callback()}
    className={`${s.button} ${isDisable ? s.dark : classBtn}`}
    type="button"
  >
    {children}
  </button>
);
const getLink = (children, url, classBtn) => (
  <Link className={classBtn} to={url}>
    {children}
  </Link>
);
const getNavLink = (children, url) => (
  <NavLink
    to={url}
    className={({ isActive }) =>
      isActive ? `${s.navlink} ${s.active}` : s.navlink
    }
  >
    {children}
  </NavLink>
);

function Button({ children, type, callback = null, url = null }) {
  switch (type) {
    case "navLink":
      return getNavLink(children, url);
    case "primary":
      return getLink(children, url, `${s.button} ${s.primary}`);
    case "link":
      return getLink(children, url, s.link);
    case "pagination":
      return getButton(children, callback, s.light, !url);
    case "error":
      return getButton(children, callback, s.danger);
    default:
      return getButton(children, callback);
  }
}

export default Button;
