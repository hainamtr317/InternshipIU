import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../config/axiosConfig";

export const getJobsList = createAsyncThunk(
    "jobs/getJobsList",
    async(_,{rejecWithValue})=>{
        try {
            const res = await Axios.get('/api/jobs/getListJobs')
            return res.data
        } catch (error) {
            return rejecWithValue(error.res.data)
        }
    }
)

const initialState = {
  success:false,
  isLoading:true,
  JobList:{},
  errorMessage:""
};

export const JobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {

  },
  extraReducers: (build)=>{
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
  }
});

export function SettingJobs(jobs){
  localStorage.setItem("jobs", jobs);
}

export const Jobs = (state) => state.jobs.JobList;
export default JobSlice.reducer;
