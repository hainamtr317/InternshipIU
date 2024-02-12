import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openChat: false,
  ChatName: "",
  ChatId: "",
};

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    SetChatName: (state, action) => {
      state.ChatName = action.payload;
    },
    SetChatId: (state, action) => {
      state.ChatId = action.payload;
    },
    SetChatOpen: (state, action) => {
      state.openChat = action.payload;
    },
    Reset: (state, action) => {
      state.ChatId = "";
      state.ChatName = "";
      state.openChat = false;
    },
  },
});
export function SettingModal(chat) {
  localStorage.setItem("Chat", chat);
}
// Action creators are generated for each case reducer function
export const { SetChatName, SetChatId, SetChatOpen, Reset } = ChatSlice.actions;

export const ChatData = (state) => state.chat;
export default ChatSlice.reducer;
