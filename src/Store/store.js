import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../features/api";
import myReducer from "../features/reducers";

export const store = configureStore({
  reducer: {
    myApi: myApi.reducer,
    myReducer: myReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    myApi.middleware,
  ],
});
