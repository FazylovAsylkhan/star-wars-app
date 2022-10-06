/* eslint-disable prefer-destructuring */
import React from "react";
import { useDispatch } from "react-redux";
import s from "./pagination.module.scss";
import Button from "../../button/Button";
import { getButtons } from "../../../utils";
import { setCurrentUrl } from "../../../store/changeUrl";

function Pagination({ data }) {
  const dispatch = useDispatch();
  const buttons = getButtons(data);
  const handleClick = (url) => {
    if (url) {
      const currentUrl = `${url.split("/").splice(4).join("/")}`;
      dispatch(setCurrentUrl(currentUrl));
    }
  };

  return (
    <div data-testid="pagination" className={s.pagination}>
      {buttons.map((button) => {
        const { text, url } = button;

        return (
          <Button
            key={text}
            type="pagination"
            url={url}
            callback={() => handleClick(url)}
          >
            {text}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
