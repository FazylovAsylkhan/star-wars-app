/* eslint-disable prefer-destructuring */
import React from "react";
import InfoBox from "../../infoBox";
import ButtonMore from "../buttomMore";
import s from "./card.module.scss";

function Card({ results: list, index }) {
  return (
    list && (
      <div data-testid="card" className={s.card}>
        <InfoBox results={list} />
        <ButtonMore idPersonalPage={index} />
      </div>
    )
  );
}

export default Card;
