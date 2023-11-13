import {createSlice} from "@reduxjs/toolkit"

export const auth = createSlice({
    name: 'authx',
    initialState: {
        language: sessionStorage.getItem('language') || 'en',
    },
    reducers: {
        saveLanguage: (state, action) => {
            state.language = action.payload; 
            sessionStorage.setItem('language', action.payload); 
        },
    }
});

export const authReducer = auth.reducer;
export const { saveLanguage } = auth.actions;