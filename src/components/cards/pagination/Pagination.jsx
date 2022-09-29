/* eslint-disable prefer-destructuring */
import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataAction,
  fetchDataForCurrentPage,
} from "../../../store/fetchData/fetchDataAction";
import buttonStyle from "../../../scss/button.module.scss";
import s from "./pagination.module.scss";

const BUTTON_TYPE_NEXT = "BUTTON_TYPE_NEXT";
const BUTTON_TYPE_PREVIOUS = "BUTTON_TYPE_PREVIOUS";

function Pagination({ data }) {
  const buttonClass = `${buttonStyle.button} ${buttonStyle.light}`;

  const dispatch = useDispatch();

  const handleClick = (type) => {
    if (data) {
      const url = type === BUTTON_TYPE_NEXT ? data.next : data.previous;
      dispatch(fetchDataForCurrentPage(url));
      fetchDataAction(dispatch);
    }
  };

  return (
    <div data-testid="pagination" className={s.pagination}>
      <button
        type="button"
        className={buttonClass}
        onClick={() => handleClick(BUTTON_TYPE_PREVIOUS)}
      >
        Previous
      </button>
      <button
        type="button"
        className={buttonClass}
        onClick={() => handleClick(BUTTON_TYPE_NEXT)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
