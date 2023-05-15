import { Grid } from "@mui/material";
import * as React from "react";
import JobCard from "./Jobcard";
import { JobData } from "./Data/jobData"; 
function JobsDisplay() {
  return (
    <>
      <Grid container>
        {JobData.map((job) =>(
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
        ))}
      </Grid>
    </>
  );
}

export default JobsDisplay;
