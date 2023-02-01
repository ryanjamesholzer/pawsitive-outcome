import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const toastShowSlice = createSlice({
  name: "toastShow",
  initialState,
  reducers: {
    setShow(state, action) {
      state.show = action.payload;
    },
  },
});

export const { setShow } = toastShowSlice.actions;

export default toastShowSlice;
