import React from "react";
import sLink from "../../button/button.module.scss";
import s from "./footer.module.scss";

function Footer() {
  return (
    <footer className={`${s.footer} container`}>
      <h4 className={s.copyright}>
        (C) Created by{" "}
        <a
          target="_blank"
          className={sLink.link}
          href="https://github.com/FazylovAsylkhan/star-wars-app"
          rel="noreferrer"
        >
          Fazylov Asylkhan
        </a>{" "}
        | 2022
      </h4>
    </footer>
  );
}

export default Footer;
