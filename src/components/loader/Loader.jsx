/* eslint-disable prefer-destructuring */
import React, { useEffect } from "react";
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
      <h2 className={s.title}>Loading...</h2>
    </div>
  );
}

export default Loader;
