import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataAPI from "../../../services/dataApiService";
import s from "./personalPage.module.scss";
import { transformDataToArray } from "../../../utils";
import InfoBox from "../../infoBox";
import Loader from "../../loader";
import ErrorMessage from "../../errorMessage";
import ErrorBoundary from "../../errorBoundary";
import Button from "../../button/Button";
import errorMessages from "../../errorBoundary/errorMessages";

function PersonalPage({ namePage }) {
  const { id } = useParams();
  const url = `/${namePage}/${id}`;
  const { data, isError, isFetching } = dataAPI.useFetchPersonalCardQuery(url);
  const [handledData, setHandledData] = useState(null);

  const handleClick = () => {
    setHandledData("sad");
  };

  useEffect(() => {
    if (data) {
      const arrayData = transformDataToArray(data);
      setHandledData(arrayData);
    }
  }, [data]);

  return (
    <ErrorBoundary textMessage={{ ...errorMessages.dataError }}>
      <div className={`${s.personalPage} content`}>
        <h1>Hellow world</h1>
        <h2>This is Personal page!</h2>
        {isError && <ErrorMessage textMessage={errorMessages.fetchError} />}
        {isFetching && <Loader />}
        {handledData && (
          <>
            <InfoBox results={handledData} />
            <Button type="error" callback={() => handleClick()}>
              Throw Error
            </Button>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default PersonalPage;
