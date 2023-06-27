import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import GridDataGradeTeacher from "../../components/Grade/GriddataGradeTeacher";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function TeacherGradeView() {
  const rows = [
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
    },
    {
      id: "ITITIU19161",
      studentName: "Trần Hải Nam",
      email: "hainamtr317@gmail.com",
      phoneNumber: 917417799,
      Instructor: "Don't Have",
      Report: "Don't have",
      status: "apply job",
      date: "not grading",
      Fngrade: "not grading",
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
            variant="h3"
          >
            <b>Grade Table:</b>
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
          <GridDataGradeTeacher rowData={rows}></GridDataGradeTeacher>
        </Box>
      </Box>
    </>
  );
}

export default TeacherGradeView;
