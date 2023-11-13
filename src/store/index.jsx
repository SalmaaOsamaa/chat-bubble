import { configureStore } from "@reduxjs/toolkit";
import { auth, authReducer } from "./slices/auth";
import { messageReducer, messagesSlice } from "./slices/messages";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        messages: messageReducer,
      },
})

export const authActions = auth.actions;
export const messageActions = messagesSlice.actions