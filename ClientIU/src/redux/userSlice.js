import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

export const openSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState } = openSlice.actions;

export default openSlice.reducer;
