import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light'
}

const darkMode = createSlice({
    name: 'darkMode',
    initialState,
    reducers:{
        changeMode:(state, action)=>{
            (state.mode === 'dark')?state.mode='light':state.mode='dark';
        }
    }
})

export const {changeMode} = darkMode.actions;
export default darkMode.reducer;