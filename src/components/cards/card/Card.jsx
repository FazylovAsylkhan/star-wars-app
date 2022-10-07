/* eslint-disable prefer-destructuring */
import React from "react";
import Button from "../../button/Button";
import InfoBox from "../../infoBox";
import s from "./card.module.scss";

function Card({ results: list, idPersonalPage }) {
  return (
    list && (
      <div data-testid="card" className={s.card}>
        <InfoBox results={list} />
        <Button type="link" url={idPersonalPage}>
          More ...
        </Button>
      </div>
    )
  );
}

export default Card;
