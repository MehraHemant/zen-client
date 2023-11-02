import { createSlice } from "@reduxjs/toolkit";
import { myApi } from "./api";

const myReducer = createSlice({
  name: "myReducer",
  initialState: {
    user: undefined,
  },
  reducers: {
    logout: (state, action) => {
      localStorage.clear();
    },
    addUser: (state, action) => {
      state.user = action.payload;
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      myApi.endpoints.getSelf.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    ),
      builder.addMatcher(
        myApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          localStorage.setItem("user", JSON.stringify(payload.token));
        }
      );
  },
});

export const { addUser, logout } = myReducer.actions;
export default myReducer.reducer;
