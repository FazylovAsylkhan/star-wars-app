import React from "react";
import Button from "../../../button/Button";
import s from "./navbar.module.scss";

function Navbar({ links }) {
  return (
    <nav data-testid="navbar" className={s.nav}>
      <ul className={s.list}>
        {links.map((link) => {
          const { text, url } = link;

          return (
            <li key={text} className={s.item}>
              <Button url={url} type="navLink">
                {text}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
