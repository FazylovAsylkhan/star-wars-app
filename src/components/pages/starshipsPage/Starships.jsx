import React from "react";
import s from "./starships.module.scss";
import downloadData from "../../../HOC/withDataByRedux";
import Cards from "../../cards";

function Starships() {
  const transformSubDataToArray = (obj) =>
    obj.results.map((item) => Object.entries(item));

  const parentProps = {
    WrappedComponent: Cards,
    url: `https://swapi.dev/api/starships/`,
    handleData: transformSubDataToArray,
  };

  const PageContent = downloadData(parentProps);

  return (
    <div className={`${s.starships} content`}>
      <h1>Hellow world</h1>
      <h2>This is Starships page!</h2>
      <PageContent />
    </div>
  );
}

export default Starships;
