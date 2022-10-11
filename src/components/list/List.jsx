import React, { useEffect, useState } from "react";
import dataAPI from "../../services/dataApiService";
import { getRelativePathFrom } from "../../utils";
import Alert from "../alert";
import { COMPONENT_ERROR } from "../errorBoundary/textsErrors";
import Loader from "../loader";
import s from "./List.module.scss";

function List({ url, callback }) {
  const relativePath = getRelativePathFrom(url);
  const { data, isFetching, isError } =
    dataAPI.useFetchHomeworldQuery(relativePath);
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (data) {
      const handledData = callback(data);
      setItems(handledData);
    }
  }, [data]);

  return (
    <>
      {isError && <Alert textMessage={COMPONENT_ERROR} />}
      {items && items.length > 0 && (
        <ul className={s.list}>
          {items.map((item) => (
            <li key={item} className={s.item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
