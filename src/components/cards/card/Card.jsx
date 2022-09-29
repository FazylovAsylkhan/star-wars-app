/* eslint-disable prefer-destructuring */
import React from "react";
import InfoBox from "../../infoBox";
import ButtonMore from "../buttomMore";
import s from "./card.module.scss";

function Card({ results: list, index }) {
  return (
    <div className={s.card}>
      {list && (
        <>
          <InfoBox results={list} />
          <ButtonMore index={index} />
        </>
      )}
    </div>
  );
}

export default Card;
