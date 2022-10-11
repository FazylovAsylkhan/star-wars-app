import React from "react";
import Clickbite from "../clickbait";
import s from "./spceificProps.module.scss";

function SpecificProps({ prop }) {
  const { name, values } = prop;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{name}</h2>
      <div className={s.props}>
        {values.map((itemUrl) => (
          <Clickbite key={itemUrl} url={itemUrl} />
        ))}
      </div>
    </div>
  );
}

export default SpecificProps;
