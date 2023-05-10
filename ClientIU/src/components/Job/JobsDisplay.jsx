import { Grid } from "@mui/material";
import * as React from "react";
import JobCard from "./Jobcard";

function JobsDisplay() {
  return (
    <>
      <Grid container>
        {Array.from(Array(10)).map((_, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
            xs={11}
            md={6}
            xl={4}
            key={index}
          >
            <JobCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default JobsDisplay;
