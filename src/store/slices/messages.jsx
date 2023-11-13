import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action) => {
        state.messages.splice(action.payload, 1);
      },
    clearMessages: (state) => {
        state.messages = []; // Clearing all messages
      },
  },
});
export const messageReducer = messagesSlice.reducer;
export const selectMessages = (state) => state.messages.messages;
export const { addMessage,clearMessages,deleteMessage } = messagesSlice.actions;