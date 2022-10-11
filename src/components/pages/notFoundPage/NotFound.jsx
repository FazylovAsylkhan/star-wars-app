import React from "react";
import Button from "../../button/Button";
import Title from "../../title";
import s from "./notFound.module.scss";

function NotFound() {
  return (
    <div className={`${s.notFound} content`}>
      <Title text="Not Found Page" />
      <div className={s.box}>
        <div className={s.description}>Pls come back to Home page</div>
        <Button type="primary" url="/">
          Come Back
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
