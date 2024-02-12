import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalActionSlice";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
import jobsSlice from "./jobsSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    jobs: jobsSlice,
    chat: chatReducer,
  },
});
