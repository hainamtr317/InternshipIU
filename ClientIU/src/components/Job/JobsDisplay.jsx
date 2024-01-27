import { Grid } from "@mui/material";
import React from "react";
import JobCard from "./Jobcard";
import { JobData } from "./Data/jobData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsList, Jobs } from "../../redux/jobsSlice";
import Axios from "../../config/axiosConfig";
function JobsDisplay() {
  const [jobsList, setJobList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  useEffect(() => {
    const sendRequestGetJob = async () => {
      await Axios.get("/api/jobs/getListJobs").then((res) => {
        setJobList(res.data.ListJobs);
      });
    };
    sendRequestGetJob();
  }, []);
  return (
    <>
      <Grid container>
        {jobsList.length > 0 &&
          jobsList.map((job) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={11}
              md={6}
              xl={4}
              key={job._id}
            >
              <JobCard JobData={job} />
            </Grid>
          ))}
        {/* {JobData.map((job) =>(
          <Grid  sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
          xs={11}
          md={6}
          xl={4}
          key={job.id}
          >
            <JobCard Job={job} />
          </Grid>
        ))} */}
      </Grid>
    </>
  );
}

export default JobsDisplay;
