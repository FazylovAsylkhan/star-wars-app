import React from "react";
import s from "./plants.module.scss";
import downloadData from "../../../HOC/withDataByRedux";
import Cards from "../../cards";

function Planets() {
  const transformSubDataToArray = (obj) =>
    obj.results.map((item) => Object.entries(item));

  const parentProps = {
    WrappedComponent: Cards,
    url: `https://swapi.dev/api/planets/`,
    handleData: transformSubDataToArray,
  };

  const PageContent = downloadData(parentProps);

  return (
    <div className={`${s.planets} content`}>
      <h1>Hellow world</h1>
      <h2>This is Planets page!</h2>
      <PageContent />
    </div>
  );
}

export default Planets;
