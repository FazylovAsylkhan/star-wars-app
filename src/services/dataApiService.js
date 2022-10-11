import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dataAPI = createApi({
  reducerPath: "dataAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    fetchAllCards: builder.query({
      query: (url) => ({
        url,
      }),
    }),
    fetchPersonalCard: builder.query({
      query: (url) => ({
        url,
      }),
    }),
    fetchHomeworld: builder.query({
      query: (url) => ({
        url,
      }),
    }),
  }),
});

export default dataAPI;
