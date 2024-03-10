import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalActionSlice";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
import jobsSlice from "./jobsSlice";
import StudentSlice from "./StudentSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    jobs: jobsSlice,
    chat: chatReducer,
    students: StudentSlice,
  },
});
