import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dataAPI from "../../../services/dataApiService";
import Cards from "../../cards";
import { getCurrentPageFor, transformSubDataToArray } from "../../../utils";
import Loader from "../../loader";
import errorMessages from "../../errorBoundary/errorMessages";
import ErrorMessage from "../../errorMessage";
import s from "./previewPage.module.scss";

function PreviewPage({ namePage }) {
  const url = useSelector((state) => state.changeUrlReducer.currentUrl);
  const currentUrl = getCurrentPageFor(namePage, url);

  const { data, isError, isFetching } =
    dataAPI.useFetchAllCardsQuery(currentUrl);
  const [handledData, setHandledData] = useState(null);

  useEffect(() => {
    if (data) {
      const arrayData = transformSubDataToArray(data);
      setHandledData(arrayData);
    }
  }, [data]);

  return (
    <div className={`${s.preview} content`}>
      <h1>Hellow world</h1>
      <h2>This is {namePage} page!</h2>
      {isError && <ErrorMessage textMessage={errorMessages.fetchError} />}
      {isFetching && <Loader />}
      {handledData && <Cards data={data} results={handledData} />}
    </div>
  );
}

export default PreviewPage;
