import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../config/axiosConfig";

export const getJobsList = createAsyncThunk(
  "jobs/getJobsList",
  async (_, { rejecWithValue }) => {
    try {
      const res = await Axios.get("/api/jobs/getListJobs");
      console.log(res.data.ListJobs);
      return res.data.ListJobs;
    } catch (error) {
      return rejecWithValue(error.res.data);
    }
  }
);
export const GetCompany = createAsyncThunk(
  "jobs/getCompany",
  async (_, { rejecWithValue }) => {
    try {
      const res = await Axios.get("/api/Company/getListCompany");
      return res.data.ListCompany;
    } catch (error) {
      return rejecWithValue(error.res.data);
    }
  }
);

const initialState = {
  success: false,
  isLoading: true,
  JobList: {},
  CompanyList: {},
  errorMessage: "",
};

export const JobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fillerJobs: (state, action) => {
      state.JobList = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(getJobsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.JobList = action.payload;
    });

    build.addCase(getJobsList.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(getJobsList.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
    });
    build.addCase(GetCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.CompanyList = action.payload;
    });

    build.addCase(GetCompany.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(GetCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
    });
  },
});

export function SettingJobs(jobs) {
  localStorage.setItem("jobs", jobs);
}
export const { fillerJobs } = JobSlice.actions;

export const Jobs = (state) => state.jobs.JobList;
export const Company = (state) => state.jobs.CompanyList;
export default JobSlice.reducer;
