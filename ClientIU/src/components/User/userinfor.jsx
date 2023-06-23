import { Box, Container,Paper,Avatar, Typography, Divider, Step,
  StepLabel,
  Stepper, } from "@mui/material";
import React, { useState } from "react";

function Userinfor() {
  const stylebox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
  };
  const steps = [
    "Apply job",
    "register Job",
    "internship",
    "White report",
    "grading",
  ];
  return (
    <>
      <Box>
        <Paper
          sx={{
            height: "150px",
            borderStyle: "groove",
            border: "2px whitesmoke solid",
            borderRadius: "10px",
            width: "auto",
            backgroundImage: "Url(../../../public/images/card-bg.svg)",
            // backgroundColor:'blue',
            backgroundSize: "cover",
          }}
        ></Paper>
        <Avatar
          sx={{
            width: 130,
            height: 130,
            marginLeft: "80px",
            marginTop: "-90px",
          }}
          src=""
        />
        <Container>
          <Typography variant="h6">Name of user</Typography>
          <Box sx={stylebox}>
            <Typography>Department: </Typography>
            <Typography sx={{ ml: "10px" }}>
              School of Computer Science and Engineering
            </Typography>
          </Box>
          <Box sx={stylebox}>
            <Typography>Major: </Typography>
            <Typography sx={{ ml: "10px" }}>Computer science</Typography>
          </Box>
          <Box sx={stylebox}>
            <Typography>Address:</Typography>
            <Typography sx={{ ml: "10px" }}>Teacher name</Typography>
          </Box>

          <Container>
            <Typography>Contact info:</Typography>
            <Container>
              <Typography>email:</Typography>
              <Typography>Phone Number:</Typography>
            </Container>
          </Container>
          <Box sx={stylebox}>
            <Typography>Your Teacher:</Typography>
            <Typography sx={{ ml: "10px" }}>Teacher name</Typography>
          </Box>
          <Box sx={stylebox}>
            <Typography>Your Instructor:</Typography>
            <Typography sx={{ ml: "10px" }}>Instructor name</Typography>
          </Box>
          <Box sx={stylebox}>
            <Typography>Your progession internship:</Typography>
          </Box>
          <Divider></Divider>
          <Box sx={{ width: "auto", marginTop: "10px" }}>
            <Stepper sx={{ width: "auto" }} activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <Typography variant="small">{label}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Userinfor;