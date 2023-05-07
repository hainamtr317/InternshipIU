import {
  Box,
  Divider,
  FormControl,
  Input,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";

import Cvcard from "../../components/Cv/Cvcard";
import FileUploadCv from "../../components/Fileupload/FileuploadCV";

const StudentCv = () => {
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
      <FileUploadCv></FileUploadCv>
      <Divider></Divider>
      <Box sx={{
        marginTop:'20px'
      }}>
        <Grid
          container
          sx={{
            marginLeft: "10px",
            width: "auto",
          }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={12}
              md={6}
              xl={4}
              key={index}
            >
              <Cvcard></Cvcard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default StudentCv;
