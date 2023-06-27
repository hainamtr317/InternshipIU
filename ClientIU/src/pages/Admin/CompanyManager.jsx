import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import GriddataCompany from "../../components/Admin/GriddataCompany";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { companyData } from "../../components/Job/Data/CompanyData";
function CompanyManger() {
  const rows = companyData
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
              marginLeft: "10px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            <b>Company manager:</b>
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
          <GriddataCompany rowData={rows}></GriddataCompany>
        </Box>
      </Box>
    </>
  );
}

export default CompanyManger;
