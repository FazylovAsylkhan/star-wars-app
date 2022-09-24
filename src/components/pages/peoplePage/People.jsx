import React from "react";
import s from "./people.module.scss";
import downloadData from "../../../HOC/withDataByRedux";
import Cards from "../../cards";
import { transformSubDataToArray } from "../../../utils";

function People() {
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
