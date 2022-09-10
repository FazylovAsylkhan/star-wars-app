import React from "react";
import s from "./people.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../card";

function People() {
  const url = `https://swapi.dev/api/people/`;
  const handleData = (data) => data.results.map((item) => Object.entries(item));
  const CardsWithContent = downloadData(Card, url, handleData);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is People page!</h2>
      <CardsWithContent />
    </div>
  );
}

export default People;
