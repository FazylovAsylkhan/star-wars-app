import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataAPI from "../../../services/dataApiService";
import Loader from "../../loader";
import Alert from "../../alert";
import ErrorBoundary from "../../errorBoundary";
import InfoBox from "../../blocks/infoBox";
import SpecificProps from "../../blocks/specificProps";
import { DATA_ERROR, FETCH_ERROR } from "../../errorBoundary/textsErrors";
import s from "./personalPage.module.scss";
import getFilteredProps from "../../blocks/specificProps/utils";
import Title from "../../title";

function PersonalPage({ namePage }) {
  const { id } = useParams();
  const url = `/${namePage}/${id}`;
  const { data, isError, isFetching } = dataAPI.useFetchPersonalCardQuery(url);
  const [handledData, setHandledData] = useState(data);
  const [filteredData, setFilteredData] = useState(null);
  const handleClick = () => {
    setHandledData("sad");
  };

  useEffect(() => {
    if (data) {
      setHandledData(data);
      const filteredProps = getFilteredProps(data);
      setFilteredData(filteredProps);
    }
  }, [data]);

  return (
    <div className={`${s.personalPage} content`}>
      {isError && <Alert textMessage={FETCH_ERROR} />}
      {isFetching && <Loader />}
      {data && (
        <>
          <Title text={data.name} />
          <div className={s.wrapper}>
            <ErrorBoundary textMessage={DATA_ERROR}>
              {handledData && (
                <InfoBox url={handledData.url} handlerClick={handleClick} />
              )}
            </ErrorBoundary>
            {data?.homeworld && <InfoBox url={data.homeworld} />}
          </div>
          {filteredData && (
            <div className={s.additionalInfo}>
              {filteredData.map((prop) => (
                <SpecificProps key={prop.name} prop={prop} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PersonalPage;
