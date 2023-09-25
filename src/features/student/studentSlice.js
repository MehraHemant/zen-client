import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentService from "./studentService";

const initialState = {
  student: undefined,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const getProfile = createAsyncThunk(
  "user/get_profile",
  async (id, thunkAPI) => {
    try {
      return await studentService.getProfile(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const editProfile = createAsyncThunk(
  "/user/edit_profile",
  async (userData, thunkAPI) => {
    try {
      return await studentService.editProfile(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(editProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export default studentSlice.reducer;
