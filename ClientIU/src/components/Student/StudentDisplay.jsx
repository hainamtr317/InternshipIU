import {
  Avatar,
  Box,
  Container,
  Divider,
  Step,
  Typography,
  Stepper,
  StepLabel,
  CardActionArea,
} from "@mui/material";
import Cvcard from "../Cv/Cvcard";
import GradingStudent from "../Teacher/GradingStudent";
import { useSelector, useDispatch } from "react-redux";
import { Modal, CloseModal } from "../../redux/userSlice";
import ModalAnnouncementToStudent from "../Teacher/ModalAnnounment";
import React from "react";

function StudentDisplay() {
  const steps = ["Apply", "register", "working", "report", "grading"];
  const styleText = { marginLeft: "20px", color: "#1976d2", marginTop: "20px" };
  const ismodalOpen = useSelector(Modal);
  const dispatch = useDispatch();
  console.log(ismodalOpen);
  const HandleModalClose = () => {
    dispatch(CloseModal(false));
  };
  return (
    <>
      <GradingStudent Open={ismodalOpen.Grade} Close={HandleModalClose} />
      <ModalAnnouncementToStudent
        Open={ismodalOpen.Announce}
        Close={HandleModalClose}
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <Avatar
            sx={{
              height: "100px",
              width: "100px",
            }}
          ></Avatar>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Student Name</Typography>
            <Typography variant="h4">ID:</Typography>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "100px",

          marginLeft: "10px",
          marginBottom: "10px",

          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography>Department: IT department</Typography>
          <Typography> Job: don't have</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", xl: "row" },
            }}
          >
            <Typography>Company:</Typography>
            <CardActionArea
              sx={{
                marginLeft: "10px",
              }}
            >
              <Typography>Name of Company:don't have</Typography>
              <Typography>address: don't have</Typography>
            </CardActionArea>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", xl: "row" },
            }}
          >
            <Typography>Instructor:don't have</Typography>
            <Box
              sx={{
                marginLeft: "10px",
              }}
            >
              <Typography>Name of Instructor:don't have</Typography>
              <Typography>Phone:don't have</Typography>
              <Typography>Email:don't have</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              color: "#1976d2",
            }}
          >
            Contract:
          </Typography>
          <Divider></Divider>
          <Typography> Email:</Typography>
          <Typography>Phone Number:</Typography>
          <Typography>Address:</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={styleText}>
          StudentCV:
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderStyle: "groove",
              border: "2px whitesmoke solid",
              borderRadius: "20px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              width: "90%",
            }}
          >
            <Cvcard></Cvcard>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={styleText}>
          Report:
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderStyle: "groove",
              border: "2px whitesmoke solid",
              borderRadius: "20px",
              width: "90%",
              minHeight: "100px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1976d2",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              NO Report{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={styleText}>
          Progression:
        </Typography>
        <Stepper sx={{ width: "auto" }} activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}

export default StudentDisplay;
