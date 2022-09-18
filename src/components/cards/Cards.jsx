import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataAction,
  fetchDataForCurrentPage,
} from "../../store/fetchData/fetchDataAction";
import Card from "./card";
import s from "./cards.module.scss";

const BUTTON_TYPE_NEXT = "BUTTON_TYPE_NEXT";
const BUTTON_TYPE_PREVIOUS = "BUTTON_TYPE_PREVIOUS";

function Cards(props) {
  const { results, data } = props;
  const dispatch = useDispatch();
  const handleClick = (type) => {
    const url = type === BUTTON_TYPE_NEXT ? data.next : data.previous;
    if (url) {
      dispatch(fetchDataForCurrentPage(url));
      fetchDataAction(dispatch);
    }
  };

  return (
    <>
      {data && (
        <>
          <button type="button" onClick={() => handleClick(BUTTON_TYPE_NEXT)}>
            Next
          </button>
          <button
            type="button"
            onClick={() => handleClick(BUTTON_TYPE_PREVIOUS)}
          >
            Previous
          </button>
        </>
      )}
      {results.map((result) => (
        <Card key={result[0][1]} results={result} />
      ))}
    </>
  );
}

export default Cards;
