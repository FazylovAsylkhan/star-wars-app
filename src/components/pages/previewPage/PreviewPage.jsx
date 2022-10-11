import React from "react";
import { useSelector } from "react-redux";
import dataAPI from "../../../services/dataApiService";
import Cards from "../../cards";
import { getCurrentUrl } from "../../../utils";
import Loader from "../../loader";
import { FETCH_ERROR } from "../../errorBoundary/textsErrors";
import Alert from "../../alert";
import s from "./previewPage.module.scss";
import Pagination from "../../pagination";
import Title from "../../title";

function PreviewPage({ namePage }) {
  const url = useSelector((state) => state.changeUrlReducer.currentUrl);
  const currentUrl = getCurrentUrl(namePage, url);

  const { data, isError, isFetching } =
    dataAPI.useFetchAllCardsQuery(currentUrl);

  return (
    <div className={`${s.preview} content`}>
      <Title text={namePage} />
      {isError && <Alert textMessage={FETCH_ERROR} />}
      {isFetching && <Loader />}
      {data && (
        <div className={s.wrapper}>
          <Cards data={data} />
          <Pagination data={data} />
        </div>
      )}
    </div>
  );
}

export default PreviewPage;
