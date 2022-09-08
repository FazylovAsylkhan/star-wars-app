import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.scss";

console.log(s);

function Navbar({ links }) {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map((link) => (
          <li key={link.text} className={s.item}>
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                isActive ? `${s.link} ${s.active}` : s.link
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
