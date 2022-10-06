/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUrl: "",
};

export const changeUrlSlice = createSlice({
  name: "changeUrl",
  initialState,
  reducers: {
    setCurrentUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
  },
});

export const { setCurrentUrl } = changeUrlSlice.actions;

export default changeUrlSlice.reducer;
