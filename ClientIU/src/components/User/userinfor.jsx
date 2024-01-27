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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogged } from "../../redux/userSlice";
import Axios from "../../config/axiosConfig";
import { Email } from "@mui/icons-material";

function Userinfor() {
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
  console.log(dataUser);
  const stylebox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  };
  const boxData = {
    display: "flex",
    flexDirection: "row",
  };
  const steps = [
    "Apply job",
    "register Job",
    "internship",
    "White report",
    "grading",
  ];
  if (isLoading) {
    return (
      <Box>
        <LinearProgress>IsLoading...</LinearProgress>{" "}
      </Box>
    );
  }
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
          src={dataUser.AvatarImage}
        />
        <Container>
          <Box sx={boxData}>
            {/* Box display info of user */}
            <Box
              sx={{
                marginTop: "30px",
              }}
            >
              <Typography variant="h6">{dataUser.name}</Typography>
              <Box sx={stylebox}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Department:{" "}
                </Typography>
                <Typography sx={{ ml: "20px" }}>
                  {dataUser.Department}
                </Typography>
              </Box>
              <Box sx={stylebox}>
                <Typography sx={{ fontWeight: "bold" }}>Major:</Typography>
                <Typography sx={{ ml: "20px" }}>{dataUser.major}</Typography>
              </Box>
              {/* <Box sx={stylebox}>
            <Typography>Teacher:{}</Typography>
            <Typography sx={{ ml: "20px" }}>Teacher name</Typography>
          </Box> */}

              <Container>
                <Typography>Contact info:</Typography>
                <Container>
                  <Typography>email: {dataUser.email}</Typography>
                  <Typography>Phone Number: {dataUser.phone}</Typography>
                </Container>
              </Container>
              {!dataUser.job ? (
                <Box sx={stylebox}>
                  <Typography sx={{ fontWeight: "bold" }}>Job:</Typography>
                  <Typography sx={{ ml: "20px" }}>Do not have job</Typography>
                </Box>
              ) : (
                <Box sx={stylebox}>
                  <Typography sx={{ fontWeight: "bold" }}>Job:</Typography>
                  <Typography sx={{ ml: "20px" }}>
                    Job Name: {dataUser.job.JobName}
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    Address: {dataUser.job.Address}
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    Company: {dataUser.job.Company}
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    TypeOfCompany: {dataUser.job.TypeofCompany}
                  </Typography>
                </Box>
              )}
            </Box>
            {/* Box display information of people relation */}
            <Box
              sx={{
                marginLeft: "300px",
                marginTop: "50px",
              }}
            >
              <Box sx={stylebox}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Your Teacher:
                </Typography>
                <Typography sx={{ ml: "20px" }}>
                  {" "}
                  Name: {dataUser.teacher.teacherName}
                </Typography>
                <Typography sx={{ ml: "20px" }}>
                  {" "}
                  Phone {dataUser.teacher.teacherPhone}
                </Typography>
                <Typography sx={{ ml: "20px" }}>
                  {" "}
                  Email:{dataUser.teacher.teacherEmail}
                </Typography>
              </Box>

              {!dataUser.instructor ? (
                <Box sx={stylebox}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Your Instructor:
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    Do not register your Instructor
                  </Typography>
                </Box>
              ) : (
                <Box sx={stylebox}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Your Instructor:
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    Name: {dataUser.instructor.name}
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    email: {dataUser.instructor.email}
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    phone Number: {dataUser.instructor.phone}
                  </Typography>
                  <Typography sx={{ ml: "20px" }}>
                    Position in Company: {dataUser.instructor.Position}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
          {/* Box procession internship */}
          <Box>
            <Box sx={stylebox}>
              <Typography sx={{ fontWeight: "bold" }}>
                Your procession internship:
              </Typography>
            </Box>
            <Divider></Divider>
            <Box sx={{ width: "auto", marginTop: "20px" }}>
              <Stepper
                sx={{ width: "auto" }}
                activeStep={dataUser.progressionStatus}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography variant="small">{label}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Userinfor;
