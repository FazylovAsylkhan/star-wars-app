import React from "react";
import s from "./people.module.scss";
import downloadData from "../../../HOC/withDataByRedux";
import Cards from "../../cards";

function People() {
  const transformSubDataToArray = (obj) =>
    obj.results.map((item) => Object.entries(item));
  const parentProps = {
    WrappedComponent: Cards,
    url: `https://swapi.dev/api/people/`,
    handleData: transformSubDataToArray,
  };

  const PageContent = downloadData(parentProps);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is people page!</h2>
      <PageContent />
    </div>
  );
}

export default People;
