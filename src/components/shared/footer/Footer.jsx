import React from "react";
import s from "./footer.module.scss";

function Footer() {
  return (
    <footer className={`${s.footer} container`}>
      <h4 className={s.copyright}>(C) Created by Fazylov Asylkhan | 2022</h4>
    </footer>
  );
}

export default Footer;
