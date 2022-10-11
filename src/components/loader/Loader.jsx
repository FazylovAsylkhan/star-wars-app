/* eslint-disable prefer-destructuring */
import React, { useEffect } from "react";
import Title from "../title";
import s from "./Loader.module.scss";

function Loader() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const bodyClassList = document.body.classList;
    bodyClassList.add(s.disableScroll);

    return () => bodyClassList.remove(s.disableScroll);
  });

  return (
    <div className={s.loader}>
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Loading <span className={s.dot1}>.</span>
          <span className={s.dot2}>.</span>
          <span className={s.dot3}>.</span>{" "}
        </h3>
        <div className={s.spinner} />
      </div>
    </div>
  );
}

export default Loader;
