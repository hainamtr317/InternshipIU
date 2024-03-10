import React from "react";
import StudentCard from "../../components/Student/StudentCard";
import { Grid, Typography, Divider, LinearProgress, Box } from "@mui/material";
import Axios from "../../config/axiosConfig";
import { checkLogged } from "../../redux/userSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetStudentsList, student } from "../../redux/StudentSlice";
import FilterStudents from "../../components/fillter/filterbarStudents";
function TeacherListStudents() {
  const dispatch = useDispatch();
  const dataUser = useSelector(student);
  const [isLoading, setIsLoading] = useState(true);

  const checkUserLogged = async () => {
    await dispatch(GetStudentsList());
    await setIsLoading(false);
  };
  useEffect(() => {
    checkUserLogged();
  }, []);

  if (isLoading) {
    return (
      <Box>
        <LinearProgress>IsLoading...</LinearProgress>{" "}
      </Box>
    );
  }
  return (
    <>
      <Typography
        sx={{
          color: "#1976d2",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        variant="h3"
      >
        <b>Students List: </b>
      </Typography>
      <FilterStudents></FilterStudents>
      <Divider></Divider>
      <Grid
        container
        sx={{
          marginLeft: "10px",
          width: "auto",
          height: "auto",
        }}
      >
        {dataUser.map((value, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              marginTop: "20px",
            }}
            xs={10}
            md={5}
            xl={3}
            key={index}
          >
            <StudentCard data={value}></StudentCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TeacherListStudents;
