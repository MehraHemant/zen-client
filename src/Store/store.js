import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../features/DarkMode/darkModeSlice";
import sessionSlice from "../features/Sessions/sessionSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
    reducer:{
        darkMode: darkModeSlice,
        session: sessionSlice,
        auth: authSlice,
    }
})