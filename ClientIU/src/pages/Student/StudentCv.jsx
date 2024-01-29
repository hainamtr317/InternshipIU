import {
  Box,
  Divider,
  FormControl,
  Input,
  Typography,
  Grid,
  LinearProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogged } from "../../redux/userSlice";
import Axios from "../../config/axiosConfig";
import Cvcard from "../../components/Cv/Cvcard";
import FileUploadCv from "../../components/Fileupload/FileuploadCV";

const StudentCv = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState();
  const checkUserLogged = async () => {
    if (localStorage.getItem("userData")) {
      const data = await JSON.parse(localStorage.getItem("userData"));
      await Axios.post("/api/users/getUserData", { userId: data.userId }).then(
        (res) => {
          setDataUser(res.data.UserData);
          setIsLoading(false);
        }
      );
    } else {
      try {
        const userData = await dispatch(checkLogged());
        await localStorage.setItem(
          "userData",
          JSON.stringify(userData.payload.data)
        );
        await Axios.post("/api/users/getUserData", {
          userId: userData.payload.data.userId,
        }).then((res) => {
          setDataUser(res.data.UserData);
          setIsLoading(false);
        });
      } catch (error) {
        return console.log(error);
      }
    }
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
        <b>Your Cv</b>
      </Typography>
      <Divider></Divider>
      <Typography
        variant="h5"
        sx={{
          color: "#1976d2",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        {" "}
        Add your Cv here
      </Typography>
      <br></br>
      <FileUploadCv StudentId={dataUser._id}></FileUploadCv>
      <Divider></Divider>
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <Grid
          container
          sx={{
            marginLeft: "10px",
            width: "auto",
          }}
        >
          {dataUser.Cv.map((cvData) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={12}
              md={6}
              xl={4}
              key={cvData._id}
            >
              <Cvcard CvData={cvData} StudentId={dataUser._id}></Cvcard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default StudentCv;
