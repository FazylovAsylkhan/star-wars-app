import React from "react";
import s from "./people.module.scss";
import Cards from "../../cards";
import downloadData from "../../../HOC/withData";

function People() {
  const url = `https://swapi.dev/api/people/`;

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
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is people page!</h2>
      <PageContent />
    </div>
  );
}

export default People;
