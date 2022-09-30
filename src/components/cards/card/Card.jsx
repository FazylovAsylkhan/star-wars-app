/* eslint-disable prefer-destructuring */
import React, { useState } from "react";
import Button from "../../button/Button";
import ErrorBoundary from "../../errorBoundary";
import InfoBox from "../../infoBox";
import s from "./card.module.scss";

function Card({ results, idPersonalPage }) {
  const [list, setList] = useState(results);
  return (
    results && (
      <ErrorBoundary>
        <div data-testid="card" className={s.card}>
          <InfoBox results={list} />
          <Button type="link" url={idPersonalPage}>
            More ...
          </Button>
          <Button type="error" callback={() => setList(null)}>
            Throw Error
          </Button>
        </div>
      </ErrorBoundary>
    )
  );
}

export default Card;
