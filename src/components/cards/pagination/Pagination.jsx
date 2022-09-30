/* eslint-disable prefer-destructuring */
import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataAction,
  fetchDataForCurrentPage,
} from "../../../store/fetchData/fetchDataAction";
import s from "./pagination.module.scss";
import Button from "../../button/Button";

function Pagination({ data }) {
  const buttons = [
    { text: "Previous", url: data.previous },
    { text: "Next", url: data.next },
  ];
  const dispatch = useDispatch();
  const handleClick = (url) => {
    if (url) {
      dispatch(fetchDataForCurrentPage(url));
      fetchDataAction(dispatch);
    }
  };

  return (
    <div data-testid="pagination" className={s.pagination}>
      {buttons.map((button) => {
        const { text, url } = button;

        return (
          <Button key={url} type="pagination" callback={() => handleClick(url)}>
            {text}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
