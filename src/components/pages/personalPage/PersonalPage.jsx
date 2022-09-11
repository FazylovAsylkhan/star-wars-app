import React from "react";
import { useParams } from "react-router-dom";
import s from "./personalPage.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../cards/card";

function PersonalPage() {
  const { peopleId } = useParams();
  const url = `https://swapi.dev/api/people/${peopleId}`;
  const transformDataToArray = (item) => Object.entries(item);
  const WrappedComponent = Card;
  const props = {
    WrappedComponent,
    url,
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
