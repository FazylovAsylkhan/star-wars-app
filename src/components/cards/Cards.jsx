import React from "react";
import Card from "./card";
import s from "./cards.module.scss";

function Cards(props) {
  const { results } = props;

  return results.map((result) => <Card key={result[0][1]} results={result} />);
}

export default Cards;
