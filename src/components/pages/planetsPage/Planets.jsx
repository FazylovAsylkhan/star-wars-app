import React from "react";
import s from "./plants.module.scss";
import downloadData from "../../../HOC/withData";
import Cards from "../../cards";

function Planets() {
  const url = `https://swapi.dev/api/planets/`;

  const transformSubDataToArray = (obj) =>
    obj.results.map((item) => Object.entries(item));

  const WrappedComponent = Cards;

  const props = {
    WrappedComponent,
    url,
    handleData: transformSubDataToArray,
  };

  const PageContent = downloadData(props);

  return (
    <div className={`${s.planets} content`}>
      <h1>Hellow world</h1>
      <h2>This is Planets page!</h2>
      <PageContent />
    </div>
  );
}

export default Planets;
