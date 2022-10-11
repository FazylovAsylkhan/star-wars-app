import React from "react";
import Navbar from "./navbar";
import Logo from "../../logo";
import s from "./header.module.scss";

function Header() {
  const links = [
    { url: "/", text: "Home" },
    { url: "/people", text: "People" },
    { url: "/planets", text: "Planets" },
    { url: "/starships", text: "Starships" },
  ];

  return (
    <header className={`${s.header} container`}>
      <Logo />
      <Navbar links={links} />
    </header>
  );
}

export default Header;
