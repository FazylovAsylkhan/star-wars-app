import React, { useEffect, useState } from "react";
import s from "./people.module.scss";
import useFetch from "../../../hooks/useFetch";
import Card from "../../card";

function People() {
  const url = `https://swapi.dev/api/people/`;
  const { data, isPending, error } = useFetch(url);
  const [results, setResults] = useState();
  const transformSubDataToArray = (obj) =>
    obj.results.map((item) => Object.entries(item));

  const WrappedComponent = () =>
    results.map((result, i) => (
      <Card key={result[0][1]} list={result} data={data} index={i} />
    ));

  useEffect(() => {
    if (data) {
      const withTransformedSubData = transformSubDataToArray(data);
      setResults(withTransformedSubData);
    }
  }, [data]);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is people page!</h2>
      <br />
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {results && <WrappedComponent />}
    </div>
  );
}

export default People;
