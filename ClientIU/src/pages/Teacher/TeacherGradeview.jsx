import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import GridDataGradeTeacher from "../../components/Grade/GriddataGradeTeacher";

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
        <Divider></Divider>
        <Box sx={{ width: "100%", height: 650 }}>
          <GridDataGradeTeacher rowData={rows}></GridDataGradeTeacher>
        </Box>
      </Box>
    </>
  );
}

export default TeacherGradeView;
