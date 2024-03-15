import { Grid } from "@mui/material";
import React from "react";
import JobCard from "../../components/Job/Jobcard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Axios from "../../config/axiosConfig";

function CompanyViewJobs() {
  const [jobsList, setJobList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    const sendRequestGetJob = async () => {
      await Axios.post("/api/Company/ReturnListJobs", {
        id: userData.CompanyID,
      }).then((res) => {
        setJobList(res.data.jobList);
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
      </Grid>
    </>
  );
}

export default CompanyViewJobs;
