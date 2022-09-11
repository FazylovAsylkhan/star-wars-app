import React from "react";
import s from "./starships.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../cards/card";

function Starships() {
  const url = `https://swapi.dev/api/starships/`;
  const handleData = (data) => data.results.map((item) => Object.entries(item));
  const CardsWithContent = downloadData(Card, url, handleData);

  return (
    <div className={`${s.starships} content`}>
      <h1>Hellow world</h1>
      <h2>This is Starships page!</h2>
      <CardsWithContent />
    </div>
  );
}

export default Starships;
