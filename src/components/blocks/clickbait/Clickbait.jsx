import React from "react";
import { Link } from "react-router-dom";
import dataAPI from "../../../services/dataApiService";
import { getRelativePathFrom } from "../../../utils";
import Alert from "../../alert";
import Button from "../../button/Button";
import { COMPONENT_ERROR } from "../../errorBoundary/textsErrors";
import Loader from "../../loader";
import s from "./Clickbite.module.scss";

function Clickbite({ url }) {
  const RelativePath = getRelativePathFrom(url);
  const { data, isFetching, isError } =
    dataAPI.useFetchHomeworldQuery(RelativePath);

  return (
    <>
      {isError && <Alert textMessage={COMPONENT_ERROR} />}
      {data && (
        <Button type="link" url={`/${getRelativePathFrom(data.url)}`}>
          {data?.name || data?.title}
        </Button>
      )}
    </>
  );
}

export default Clickbite;
