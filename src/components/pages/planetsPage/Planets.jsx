import React from "react";
import s from "./plants.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../cards/card";

function Planets() {
  const url = `https://swapi.dev/api/planets/`;
  const handleData = (data) => data.results.map((item) => Object.entries(item));
  const CardsWithContent = downloadData(Card, url, handleData);

  return (
    <div className={`${s.planets} content`}>
      <h1>Hellow world</h1>
      <h2>This is Planets page!</h2>
      <CardsWithContent />
    </div>
  );
}

export default Planets;
