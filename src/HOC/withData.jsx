import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function donwloadData(propsData) {
  const { WrappedComponent, url, handleData } = propsData;

  return function WithData() {
    const { data, isPending, error } = useFetch(url);
    const [results, setResults] = useState([]);

    useEffect(() => {
      if (data) {
        const handledData = handleData(data);
        setResults(handledData);
      }
    }, [data]);

    return (
      <>
        <br />
        {error && <h2>{error}</h2>}
        {isPending && <h2>Loading...</h2>}
        {results && <WrappedComponent results={results} data={data} />}
      </>
    );
  };
}

export default donwloadData;
