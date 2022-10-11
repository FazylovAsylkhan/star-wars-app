/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import Title from "../title";
import s from "./alert.module.scss";

function Alert({ textMessage }) {
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
          <Title text={title} />
          <p className={s.description}>{description}</p>
          <Button callback={() => handleClick()} type="error">
            Ok
          </Button>
        </div>
      </div>
    )
  );
}

export default Alert;
