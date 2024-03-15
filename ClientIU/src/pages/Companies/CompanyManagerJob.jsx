import GridDataJobs from "../../components/Admin/GriddataJobs";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import {
  Box,
  Divider,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Axios from "../../config/axiosConfig";
import DataGridJobs from "./components/DataGridJobs";
function ComJobsManager() {
  const [rows, setRows] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const companyData = JSON.parse(localStorage.getItem("userData"));
  const getData = async () => {
    await Axios.post("/api/Company/ReturnListJobs", {
      id: companyData.CompanyID,
    }).then(async (res) => {
      await Promise.all(
        res.data.jobList.map((e) => {
          return {
            id: e._id,
            nameJob: e.nameJob,
            image: e.image,
            company: e.company,
            Address: e.Address,
            salary: e.salary,
            update: e.updatedAt,
            Description: e.Description,
            companyRef: e.companyRef[0].toString(),
            SkillRequire: e.SkillRequire,
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
    <>
      <Box>
        <LinearProgress>
          <Typography>Loading...</Typography>
        </LinearProgress>
      </Box>
    </>;
  }
  if (rows.length > 0) {
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
            ></Box>
          </Box>
          <Divider></Divider>
          <Box sx={{ width: "100%", height: 650 }}>
            <DataGridJobs rowData={rows}></DataGridJobs>
          </Box>
        </Box>
      </>
    );
  }
}

export default ComJobsManager;
