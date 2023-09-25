import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../features/DarkMode/darkModeSlice";
import sessionSlice from "../features/Sessions/sessionSlice";
import authSlice from "../features/auth/authSlice";
import studentSlice from "../features/student/studentSlice";
import tasksSlice from "../features/Tasks/tasksSlice";

export const store = configureStore({
    reducer:{
        darkMode: darkModeSlice,
        session: sessionSlice,
        auth: authSlice,
        student: studentSlice,
        task: tasksSlice
    }
})