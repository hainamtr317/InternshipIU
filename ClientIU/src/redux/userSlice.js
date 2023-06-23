import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "student",
  Grade: false,
  Announce: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeRole: (state, action) => {
      state.value = action.payload;
    },
    OpenGrade: (state, action) => {
      state.Grade = action.payload;
    },
    OpenAnnounce: (state, action) => {
      state.Announce = action.payload;
    },
    CloseModal: (state, action) => {
      state.Announce = action.payload;
      state.Grade = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeRole, OpenGrade, OpenAnnounce, CloseModal } =
  userSlice.actions;
export const Selector = (state) => state.user.value;
export const Modal = (state) => state.user;
export default userSlice.reducer;
