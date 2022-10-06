import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataAPI from "../../../services/dataApiService";
import s from "./personalPage.module.scss";
import { transformDataToArray } from "../../../utils";
import InfoBox from "../../infoBox";
import Loader from "../../loader";
import ErrorMessage from "../../errorMessage";

function PersonalPage({ namePage }) {
  const { id } = useParams();
  const url = `/${namePage}/${id}`;
  const { data, error, isFetching } = dataAPI.useFetchPersonalCardQuery(url);
  const [handledData, setHandledData] = useState(null);

  useEffect(() => {
    if (data) {
      const arrayData = transformDataToArray(data);
      setHandledData(arrayData);
    }
  }, [data]);

  return (
    <div className={`${s.personalPage} content`}>
      <h1>Hellow world</h1>
      <h2>This is Personal page!</h2>
      {error && <ErrorMessage textMessage={error} />}
      {isFetching && <Loader />}
      {handledData && <InfoBox results={handledData} />}
    </div>
  );
}

export default PersonalPage;
