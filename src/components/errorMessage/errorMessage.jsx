/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import s from "./ErrorMessage.module.scss";

function ErrorMessage({ textMessage }) {
  const { title, description } = textMessage;
  const [isEnable, setIsEnable] = useState(true);
  const handleClick = () => {
    setIsEnable(false);
    document.body.classList.remove(s.disableScroll);
  };

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const bodyClassList = document.body.classList;
    bodyClassList.add(s.disableScroll);
  }, []);

  return (
    isEnable && (
      <div className={s.errorMessage}>
        <div className={s.box}>
          <h2 className={s.title}>{title}</h2>
          <p>{description}</p>
          <Button callback={() => handleClick()} type="error">
            Ok
          </Button>
        </div>
      </div>
    )
  );
}

export default ErrorMessage;
