import React from "react";
import Navbar from "../../navbar";
import s from "./header.module.scss";

function Header() {
  const links = [
    { url: "/", text: "Home" },
    { url: "/people", text: "People" },
    { url: "/plants", text: "Plants" },
    { url: "/starships", text: "Starships" },
  ];

  return (
    <header className={`${s.header} container`}>
      <Navbar links={links} />
    </header>
  );
}

export default Header;
