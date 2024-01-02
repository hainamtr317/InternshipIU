import {
  Box,
  Divider,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import GridDataCompany from "../../components/Admin/GriddataCompany";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { companyData } from "../../components/Job/Data/CompanyData";
import Axios from "../../config/axiosConfig";
function CompanyManger() {
  // const rows = companyData;
  const [rows, setRows] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const getData = async () => {
    await Axios.get("/api/Company/getListCompany").then(async (res) => {
      await Promise.all(
        res.data.ListCompany.map((e) => {
          return {
            id: e._id,
            company: e.company,
            image: e.image,
            email: e.email,
            Address: e.Address,
            Website: e.Website,
            CompanySize: e.CompanySize,
            BussinessAreas: e.BussinessAreas,
            Decripsion: e.Decripsion,
            office: e.office,
            Joblist: e.Joblist,
          };
        })
      ).then((value) => {
        setRows(value);
        SetIsLoading(false);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Box sx={{}}>
          <LinearProgress>
            <Typography>Loading...</Typography>
          </LinearProgress>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box>
        {console.log(rows)}
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
          <GridDataCompany rowData={rows}></GridDataCompany>
        </Box>
      </Box>
    </>
  );
}

export default CompanyManger;
