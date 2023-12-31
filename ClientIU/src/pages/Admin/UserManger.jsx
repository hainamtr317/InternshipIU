import {
  Box,
  Container,
  Paper,
  Avatar,
  Typography,
  Divider,
  Step,
  StepLabel,
  Stepper,
  LinearProgress,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GriddataUser from "../../components/Admin/GriddataUser";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Axios from "../../config/axiosConfig";

function UserManger() {
  const [IsLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState();
  const getListUser = async () => {
    await Axios.get("/api/users").then(async (res) => {
      const RowData = await getRow(res.data.userList);
      setRows(RowData);
      setIsLoading(false);
    });
  };
  const getRow = (data) => {
    let newRow = [];
    data.map((e) => {
      if (e.roles == "student") {
        const setData = {
          id: e._id,
          UserID: e.userId,
          password: e.password,
          Role: e.roles,
          dataUser: e.userData,
          Update: e.updatedAt,
          LoginStatus: e.isLogin ? "online" : "offline",
          Manager: "",
        };
        newRow.push(setData);
      } else if (e.roles == "teacher") {
        const setData = {
          id: e._id,
          UserID: e.userId,
          password: e.password,
          Role: e.roles,
          dataUser: e.teacherData,
          Update: e.updatedAt,
          LoginStatus: e.isLogin ? "online" : "offline",
          Manager: "",
        };
        newRow.push(setData);
      }
    });
    return newRow;
  };
  useEffect(() => {
    getListUser();
  }, []);

  if (IsLoading) {
    return (
      <Box>
        <LinearProgress>IsLoading...</LinearProgress>{" "}
      </Box>
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
              marginLeft: "20px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            <b>User Table:</b>
          </Typography>
        </Box>
        <Divider></Divider>
        <Box sx={{ width: "100%", height: 650 }}>
          <GriddataUser rowData={rows}></GriddataUser>
        </Box>
      </Box>
    </>
  );
}

export default UserManger;
