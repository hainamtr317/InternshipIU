import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../config/axiosConfig";

export const GetStudentsList = createAsyncThunk(
  "student/getStudentList",
  async (_, { rejecWithValue }) => {
    try {
      const data = await JSON.parse(localStorage.getItem("userData"));
      const res = await Axios.post("/api/users/getUserData", {
        userId: data.userId,
      });
      return res.data.UserData.ListStudent;
    } catch (error) {
      return rejecWithValue(error.res.data);
    }
  }
);

const initialState = {
  success: false,
  isLoading: true,
  StudentsList: {},
  errorMessage: "",
};

export const StudentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    filterStudents: (state, action) => {
      state.StudentsList = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(GetStudentsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.StudentsList = action.payload;
    });

    build.addCase(GetStudentsList.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(GetStudentsList.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
    });
  },
});

export function SettingStudents(students) {
  localStorage.setItem("students", students);
}
export const { filterStudents } = StudentSlice.actions;

export const student = (state) => state.students.StudentsList;

export default StudentSlice.reducer;
