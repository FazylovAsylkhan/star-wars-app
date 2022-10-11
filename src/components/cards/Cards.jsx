import React from "react";
import Card from "./card";
import s from "./cards.module.scss";

function Cards({ data }) {
  const { results } = data;

  return (
    <div data-testid="cards" className={s.cards}>
      {results.map((result, index) => (
        <Card key={result.name} data={result} idPersonalPage={`${index + 1}`} />
      ))}
    </div>
  );
}

export default Cards;
