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
        res.data.ListCompany.map(async (element) => {
          return {
            id: element._id,
            company: element.company,
            image: element.image,
            email: element.email,
            Address: element.Address,
            Website: element.Website,
            CompanySize: element.CompanySize,
            BussinessAreas: element.BussinessAreas,
            Decripsion: element.Decripsion,
            office: element.office,
            Joblist: element.JobList,
          };
        })
      ).then((value) => {
        console.log(value);
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
          ></Box>
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
