/* eslint-disable no-param-reassign */
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import changeUrlReducer from "./changeUrl";
import dataAPI from "../services/dataApiService";

const store = configureStore({
  reducer: {
    [dataAPI.reducerPath]: dataAPI.reducer,
    changeUrlReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataAPI.middleware),
});
setupListeners(store.dispatch);

export default store;
