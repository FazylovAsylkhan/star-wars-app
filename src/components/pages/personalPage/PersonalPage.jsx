import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./personalPage.module.scss";
import downloadData from "../../../HOC/withData";
import Card from "../../card";
import useFetch from "../../../hooks/useFetch";

function PersonalPage() {
  const { peopleId } = useParams();
  const url = `https://swapi.dev/api/people/${peopleId}`;
  const { data, isPending, error } = useFetch(url);
  const [results, setResults] = useState();
  const transformDataToArray = (item) => Object.entries(item);
  const WrappedComponent = function () {
    return results.map(([props, value]) => (
      <li key={props}>
        <b>{props}: </b>
        {value}
      </li>
    ));
  };
  useEffect(() => {
    if (data) {
      const withTransformedSubData = transformDataToArray(data);
      setResults(withTransformedSubData);
    }
  }, [data]);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is Personal page!</h2>
      <br />
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      <ul>{results && <WrappedComponent />}</ul>
    </div>
  );
}

export default PersonalPage;
