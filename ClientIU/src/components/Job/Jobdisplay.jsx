import { Grid } from "@mui/material";
import * as React from "react";
import JobCard from "../Job/Jobcard";

function Jobdisplay() {
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
            xs={12}
            md={6}
            xl={3}
            key={index}
          >
            <JobCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Jobdisplay;
