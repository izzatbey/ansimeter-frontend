import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const slice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export default slice;
export const { actions, reducer } = slice;
