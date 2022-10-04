import React from "react";
import { useParams } from "react-router-dom";
import s from "./personalPage.module.scss";
import downloadData from "../../../HOC/withData";
import { transformDataToArray } from "../../../utils";
import InfoBox from "../../infoBox";

function PersonalPage({ namePage }) {
  const { id } = useParams();
  const props = {
    WrappedComponent: InfoBox,
    url: `https://swapi.dev/api/${namePage}/${id}`,
    handleData: transformDataToArray,
  };

  const PageContent = downloadData(props);

  return (
    <div className={`${s.personalPage} content`}>
      <h1>Hellow world</h1>
      <h2>This is Personal page!</h2>
      <PageContent />
    </div>
  );
}

export default PersonalPage;
