import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const slice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },

    // setTweet(state, action) {
    //   state.tweet = action.payload;
    // },

    // setUsername(state, action) {
    //   state.username = action.payload;
    // },

    // setSentimen(state, action) {
    //   state.sentimen = action.payload;
    // },
  },
});

export default slice;
export const { actions, reducer } = slice;
