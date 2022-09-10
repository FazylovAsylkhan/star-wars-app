import React from "react";
import s from "./plants.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../card/Card";

function Planets() {
  const url = `https://swapi.dev/api/planets/`;
  const handleData = (data) => data.results.map((item) => Object.entries(item));
  const CardsWithContent = downloadData(Card, url, handleData);

  return (
    <div className={`${s.plants} content`}>
      <h1>Hellow world</h1>
      <h2>This is Plants page!</h2>
      <CardsWithContent />
    </div>
  );
}

export default Planets;
