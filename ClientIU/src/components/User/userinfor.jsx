import { Box, Container,Paper,Avatar, Typography, Divider, Step,
  StepLabel,
  Stepper, } from "@mui/material";
import React, { useState } from "react";

function Userinfor() {
  const steps = ["Apply job", "register Job", "internship", "White report", "grading"];
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
            <Typography>department</Typography>
            <Typography>Major</Typography>
            <Typography>Address</Typography>
            <Container>
              <Typography>Contact info:</Typography>
              <Typography>-email</Typography>
              <Typography>-phone Number</Typography>
            </Container>
            <Typography>Your Teacher:</Typography>
            <Typography>Your Instructor:</Typography>
            <Typography>Your progession internship</Typography>
            <Divider></Divider>
            <Box sx={{ width: "auto", marginTop: "10px" }}>
              <Stepper
                sx={{ width: "auto", }}
                activeStep={0}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography variant="small" >
                        {label}
                      </Typography>
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