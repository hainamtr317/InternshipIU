import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import GriddataUser from "../../components/Admin/GriddataUser";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function UserManger() {
  const rows = [
    {
      id: "ITITIU19161",
      Name: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      password: "asdasdfsdf",
      phoneNumber: 917417799,
      Role:"Teacher",
      Manager:""
      
    },
    {
        id: "ITITIU19161",
        Name: "Trần Hải Nam",
        email: "hainamtr317@gmail.com",
        password: "asdasdfsdf",
        phoneNumber: 917417799,
        Role:"Teacher",
        Manager:""
    },
    {
        id: "ITITIU19161",
        Name: "Trần Hải Nam",
        email: "hainamtr317@gmail.com",
        password: "asdasdfsdf",
        phoneNumber: 917417799,
        Role:"Teacher",
        Manager:""
    },
    {
        id: "ITITIU19161",
        Name: "Trần Hải Nam",
        email: "hainamtr317@gmail.com",
        password: "asdasdfsdf",
        phoneNumber: 917417799,
        Role:"Teacher",
        Manager:""
    },
    {
        id: "ITITIU19161",
      Name: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      password: "asdasdfsdf",
      phoneNumber: 917417799,
      Role:"Teacher",
      Manager:""
    },
    {
        id: "ITITIU19161",
        Name: "Trần Hải Nam",
        email: "hainamtr317@gmail.com",
        password: "asdasdfsdf",
        phoneNumber: 917417799,
        Role:"Teacher",
        Manager:""
    },
    {
        id: "ITITIU19161",
        Name: "Trần Hải Nam",
        email: "hainamtr317@gmail.com",
        password: "asdasdfsdf",
        phoneNumber: 917417799,
        Role:"Teacher",
        Manager:""
    },
    {
        id: "ITITIU19161",
        Name: "Trần Hải Nam",
        email: "hainamtr317@gmail.com",
        password: "asdasdfsdf",
        phoneNumber: 917417799,
        Role:"Teacher",
        Manager:""
    },
  ];
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
          <GriddataUser rowData={rows}></GriddataUser>
        </Box>
      </Box>
    </>
  );
}

export default UserManger;
