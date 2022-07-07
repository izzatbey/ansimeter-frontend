import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sentimen: []
};

const slice = createSlice({
  name: "sentimen",
  initialState,
  reducers: {
    setSentimen(state, action) {
      state.sentimen = action.payload;
    },
  },
});

export default slice;
export const { actions, reducer } = slice;
