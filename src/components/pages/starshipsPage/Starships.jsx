import React from "react";
import s from "./starships.module.scss";
import downloadData from "../../../HOC/withData";
import Cards from "../../cards";

function Starships() {
  const url = `https://swapi.dev/api/starships/`;
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
    <div className={`${s.starships} content`}>
      <h1>Hellow world</h1>
      <h2>This is Starships page!</h2>
      <PageContent />
    </div>
  );
}

export default Starships;
