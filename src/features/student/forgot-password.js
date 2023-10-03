import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentService from "./studentService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const forgotPassword = createAsyncThunk(
  "/user/forgotPassword",
  async (userData, thunkAPI) => {
    try {
      return await studentService.forgotPassword(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgot_password",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
  },
});
export default forgotPasswordSlice.reducer;
