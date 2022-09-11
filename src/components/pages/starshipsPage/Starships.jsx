import React from "react";
import s from "./starships.module.scss";
import downloadData from "../../../HOC/withData";
import Cards from "../../cards";

function Starships() {
  const transformSubDataToArray = (obj) =>
    obj.results.map((item) => Object.entries(item));

  const props = {
    WrappedComponent: Cards,
    url: `https://swapi.dev/api/starships/`,
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
