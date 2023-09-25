import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sessionService from "./sessionService";

export const getSession = createAsyncThunk(
  "/session/get-session",
  async (thunkAPI) => {
    try {
      return await sessionService.getSessions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleSession = createAsyncThunk(
  "/session/get-single-session",
  async (id, thunkAPI) => {
    try {
      return await sessionService.getSingleSession(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  sessions: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  session: undefined,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSession.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sessions = action.payload;
      })
      .addCase(getSession.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getSingleSession.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.session = action.payload;
      })
      .addCase(getSingleSession.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default sessionSlice.reducer;
