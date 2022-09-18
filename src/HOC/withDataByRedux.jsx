import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchDataAction,
  fetchDataForCurrentPage,
} from "../store/fetchData/fetchDataAction";

const mapStateToProps = (state) => ({
  state: {
    data: state.fetchData.data,
    isPending: state.fetchData.isPending,
    error: state.fetchData.error,
  },
});

const mapDispatcnToProps = (dispatch) => ({
  actions: {
    sendCurrentPage: (url) => dispatch(fetchDataForCurrentPage(url)),
    fetchData: () => dispatch(fetchDataAction),
  },
});

function downloadData(parentProps) {
  const { WrappedComponent, url, handleData } = parentProps;

  function DataContainer({ state, actions }) {
    const { data, isPending, error } = state;
    const { fetchData, sendCurrentPage } = actions;
    const [results, setResults] = useState([]);

    useEffect(() => {
      sendCurrentPage(url);
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (data) {
        const handledData = handleData(data);
        setResults(handledData);
      }
    }, [data]);

    return (
      <>
        {isPending && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {results && <WrappedComponent results={results} data={data} />}
      </>
    );
  }

  const WithData = connect(mapStateToProps, mapDispatcnToProps)(DataContainer);

  return WithData;
}

export default downloadData;
