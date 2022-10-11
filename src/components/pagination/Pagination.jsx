/* eslint-disable prefer-destructuring */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import { getButtons, getRelativePathFrom } from "../../utils";
import { setCurrentUrl } from "../../store/changeUrl";
import addActiveClass from "./utils";
import s from "./pagination.module.scss";

function Pagination({ data }) {
  const dispatch = useDispatch();
  const buttons = getButtons(data);
  const handleClick = (url) => {
    if (url) {
      const currentUrl = getRelativePathFrom(url);
      addActiveClass(url);
      dispatch(setCurrentUrl(currentUrl));
    }
  };

  useEffect(() => {
    addActiveClass();
  }, []);

  return (
    <div data-testid="pagination" id="pagination" className={s.pagination}>
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
