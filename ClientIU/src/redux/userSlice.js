import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "student",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeRole: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeRole } = userSlice.actions;
export const Selector = (state) => state.user.value;
export default userSlice.reducer;
