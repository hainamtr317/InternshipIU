import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import GriddataJobs from "../../components/Admin/GriddataJobs";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { JobData } from "../../components/Job/Data/jobData";
function JobsManager() {
  const rows = JobData
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{
              color: "#1976d2",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            <b>Jobs Managers:</b>
          </Typography>
          <Box
            sx={{
              ml: "700px",
            }}
          >
            <Button variant="outlined" startIcon={<SaveAsOutlinedIcon />}>
              Save
            </Button>
            <Button variant="outlined" startIcon={<ExitToAppOutlinedIcon />}>
              Export
            </Button>
          </Box>
        </Box>
        <Divider></Divider>
        <Box sx={{ width: "100%", height: 650 }}>
          <GriddataJobs rowData={rows}></GriddataJobs>
        </Box>
      </Box>
    </>
  );
}

export default JobsManager;
