import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dataAPI from "../../../services/dataApiService";
import s from "./people.module.scss";
import Cards from "../../cards";
import { getCurrentPageFor, transformSubDataToArray } from "../../../utils";
import Loader from "../../loader";
import ErrorMessage from "../../errorMessage";

function People() {
  const url = useSelector((state) => state.changeUrlReducer.currentUrl);
  const currentUrl = getCurrentPageFor("people", url);

  const { data, error, isFetching } = dataAPI.useFetchAllCardsQuery(currentUrl);
  const [handledData, setHandledData] = useState(null);

  useEffect(() => {
    if (data) {
      const arrayData = transformSubDataToArray(data);
      setHandledData(arrayData);
    }
  }, [data]);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is people page!</h2>
      {error && <ErrorMessage textMessage={error} />}
      {isFetching && <Loader />}
      {handledData && <Cards data={data} results={handledData} />}
    </div>
  );
}

export default People;
