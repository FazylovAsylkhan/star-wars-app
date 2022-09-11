import React from "react";
import { useParams } from "react-router-dom";
import s from "./personalPage.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../cards/card";

function PersonalPage({ namePage }) {
  const { id } = useParams();
  const transformDataToArray = (item) => Object.entries(item);
  const props = {
    WrappedComponent: Card,
    url: `https://swapi.dev/api/${namePage}/${id}`,
    handleData: transformDataToArray,
  };

  const PageContent = downloadData(props);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is Personal page!</h2>
      <PageContent />
    </div>
  );
}

export default PersonalPage;
