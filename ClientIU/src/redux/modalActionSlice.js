
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Grade: false,
  Announce: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // changeRole: (state, action) => {
    //   state.value = action.payload;
    // },
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
export function SettingModal(modal){
  localStorage.setItem("modal", modal);
}
// Action creators are generated for each case reducer function
export const { OpenGrade, OpenAnnounce, CloseModal } = modalSlice.actions;
// export const Selector = (state) => state.user.value;
export const Modal = (state) => state.modal;
export default modalSlice.reducer;
