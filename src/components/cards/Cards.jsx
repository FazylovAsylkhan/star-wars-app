import React from "react";
import Card from "./card";
import Pagination from "../pagination";
import s from "./cards.module.scss";

function Cards(props) {
  const { results, data } = props;

  return (
    <div className={s.wrapper}>
      {data && <Pagination data={data} />}
      <div className={s.cards}>
        {results.map((result) => (
          <Card key={result[0][1]} results={result} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
