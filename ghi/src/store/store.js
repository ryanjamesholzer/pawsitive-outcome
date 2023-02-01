import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./pawsitiveApi";
import toastMessageSlice from "./toastMessageSlice";
import toastShowSlice from "./toastShowSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [toastShowSlice.name]: toastShowSlice.reducer,
    [toastMessageSlice.name]: toastMessageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
