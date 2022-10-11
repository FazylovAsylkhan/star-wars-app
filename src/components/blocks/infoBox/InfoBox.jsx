import React from "react";
import Button from "../../button/Button";
import List from "../../list";
import { getHandlerDataFor, getRelativeUrl } from "./utils";
import s from "./infoBox.module.scss";

function InfoBox({ url, handlerClick = null }) {
  const [namePage] = getRelativeUrl(url);
  const handler = handlerClick
    ? getHandlerDataFor(namePage)
    : getHandlerDataFor();

  return (
    <div className={s.infoBox}>
      <List url={url} callback={handler} />
      {handlerClick && (
        <Button type="error" callback={() => handlerClick()}>
          Throw Error
        </Button>
      )}
    </div>
  );
}

export default InfoBox;
