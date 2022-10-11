import React from "react";
import Button from "../../button/Button";
import s from "./card.module.scss";

function getDescription(data) {
  if (data.gender) return `Gender: ${data.gender}`;
  if (data.population) return `Population: ${data.population}`;
  if (data.model) return `Model: ${data.model}`;
  return null;
}

function Card({ data, idPersonalPage }) {
  const description = getDescription(data);
  return (
    data && (
      <div data-testid="card" className={s.card}>
        <div>
          <h3>{data.name}</h3>
          <p>{description}</p>
        </div>
        <Button type="primary" url={idPersonalPage}>
          More ...
        </Button>
      </div>
    )
  );
}

export default Card;
