import React from "react";
import Card from "./card";
import Pagination from "./pagination";
import s from "./cards.module.scss";

function Cards(props) {
  const { results, data } = props;

  return (
    <div data-testid="cards" className={s.wrapper}>
      {data && <Pagination data={data} />}
      <div className={s.cards}>
        {results.map((result, index) => (
          <Card
            key={result[0][1]}
            results={result}
            data={data.results[index]}
            idPersonalPage={`${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
