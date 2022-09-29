/* eslint-disable no-undef */
import fetchDataReducer from "./fetchData/fetchDataReducer";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataForCurrentPage,
} from "./fetchData/fetchDataAction";

describe("fetchDataReducer works", () => {
  const initialState = {
    isPending: false,
    data: null,
    error: "",
    currentPage: "",
  };

  it("fetchDataRequest works", () => {
    expect(fetchDataReducer(initialState, fetchDataRequest())).toEqual({
      isPending: true,
      data: null,
      error: "",
      currentPage: "",
    });
  });

  it("fetchDataSuccess works", () => {
    expect(
      fetchDataReducer(initialState, fetchDataSuccess({ key: "prop" }))
    ).toEqual({
      isPending: false,
      data: { key: "prop" },
      error: "",
      currentPage: "",
    });
  });

  it("fetchDataFailure works", () => {
    expect(
      fetchDataReducer(initialState, fetchDataFailure("something went wrong"))
    ).toEqual({
      isPending: false,
      data: [],
      error: "something went wrong",
      currentPage: "",
    });
  });

  it("fetchDataForCurrentPage works", () => {
    expect(
      fetchDataReducer(
        initialState,
        fetchDataForCurrentPage("https://google.com")
      )
    ).toEqual({
      isPending: false,
      data: null,
      error: "",
      currentPage: "https://google.com",
    });
  });
});
