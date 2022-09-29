/* eslint-disable prefer-destructuring */
import React, { useState } from "react";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import InfoBox from "../../infoBox";
import ButtonMore from "../buttomMore";
import s from "./card.module.scss";

function Card({ results, index }) {
  const [list, setList] = useState(results);
  return (
    results && (
      <ErrorBoundary>
        <div data-testid="card" className={s.card}>
          <InfoBox results={list} />
          <ButtonMore idPersonalPage={index} />
          <button type="button" onClick={() => setList(null)}>
            Throw Error
          </button>
        </div>
      </ErrorBoundary>
    )
  );
}

export default Card;
