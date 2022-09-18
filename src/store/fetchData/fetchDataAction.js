import store from "..";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_FOR_CURRENT_PAGE,
} from "./fetchDataType";

export const fetchDataForCurrentPage = (url) => ({
  type: FETCH_DATA_FOR_CURRENT_PAGE,
  payload: url,
});
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export function fetchDataAction(dispatch) {
  const { currentPage } = store.getState().fetchData;

  dispatch(fetchDataRequest());

  fetch(currentPage)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchDataSuccess(data));
    })
    .catch((error) => {
      const { message } = error;
      dispatch(fetchDataFailure(message));
    });
}
