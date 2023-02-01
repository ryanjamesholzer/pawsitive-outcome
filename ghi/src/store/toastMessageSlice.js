import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const toastMessageSlice = createSlice({
  name: "toastMessage",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = toastMessageSlice.actions;

export default toastMessageSlice;
