import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./tasksService";

export const getTask = createAsyncThunk(
  "/answers/task",
  async (thunkAPI) => {
    try {
      return await taskService.getTask();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
    tasks: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    task: null
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getTask.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getTask.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.tasks = action.payload;
        })
        .addCase(getTask.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
          })
    }
})

export default taskSlice.reducer