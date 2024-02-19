import React, { useMemo } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { Link, redirect, useNavigate } from "react-router-dom";

import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Paper,
  TextField,
  StepLabel,
  Stepper,
  Divider,
  Step,
} from "@mui/material";
import Axios from "../../../../config/axiosConfig";
function RegisterStudent({ Role }) {
  const steps = [
    "Apply job",
    "register Job",
    "internship",
    "White report",
    "grading",
  ];
  const style = {
    bgcolor: "background.paper",
  };
  const textHolder = {
    display: "flex",
    flexDirection: "row",
    ml: "20px",
    mt: "10px",
  };
  const teacherInfoDisplay = {
    display: "flex",
    flexDirection: "column",
    width: 700,
    borderRadius: "10px",
    boxShadow: 24,
  };
  const styleBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  };
  const handleClickUpdate = async (e) => {
    e.preventDefault();
    var userIdS = e.target.elements.userId.value;
    var passS = e.target.elements.password.value;
    var nameS = e.target.elements.name.value;
    var emailS = e.target.elements.email.value;
    var majorS = e.target.elements.major.value;
    var phoneS = e.target.elements.phone.value;
    var departmentS = e.target.elements.department.value;
    const dataRegisterUser = {
      userId: userIdS,
      password: passS,
      roles: Role,
    };
    const dataRegisterStudent = {
      StudentId: userIdS,
      name: nameS,
      major: majorS,
      Department: departmentS,
      email: emailS,
      AvatarImage:
        "https://t3.ftcdn.net/jpg/05/67/12/76/360_F_567127618_aAU0YHdlOn0TfRuHBqwU3bXhLKb5S9jG.jpg",
      phone: phoneS,
      progressionStatus: 0,
    };
    try {
      await Axios.post("/api/users/register", dataRegisterUser).then(
        async (res) => {
          if (res.data.success) {
            alert("create user success");
            await Axios.post("/api/student", {
              userId: res.data.data,
              data: dataRegisterStudent,
            }).then((res2) => {
              if (res2.data.createSuccess) {
                alert("create Student success", res2.data.data);
                location.reload(true);
              } else {
                alert("have error", res2.data.error);
              }
            });
          } else {
            alert("have err");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={style}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            ml: "20px",
          }}
        >
          <Box
            component="form"
            onSubmit={(e) => {
              handleClickUpdate(e);
            }}
            sx={teacherInfoDisplay}
          >
            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  UserId:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="userId"
                  name="userId"
                  label="UserId"
                  sx={{ ml: "10px" }}
                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  Password:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  sx={{ ml: "10px" }}
                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  Name:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="name"
                  sx={{ ml: "10px" }}
                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  Email:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="email"
                  sx={{ ml: "10px" }}
                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  Phone:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="phone"
                  sx={{ ml: "10px" }}
                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  Major:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="major"
                  name="major"
                  label="Major"
                  //   sx={{ ml: "10px", width: "400px" }}

                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box sx={textHolder}>
              <Box>
                <Typography
                  sx={{
                    mt: "12px",
                  }}
                >
                  Department:
                </Typography>
              </Box>
              <Box>
                <TextField
                  required
                  id="department"
                  name="department"
                  label="department"
                  sx={{ ml: "10px", width: "400px" }}
                  variant="filled"
                ></TextField>
              </Box>
            </Box>

            <Box
              sx={{
                mt: "10px",
                flex: 1,
                flexDirection: "row",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  flex: 6,
                }}
              ></Box>
              <Button
                sx={{
                  flex: 1,
                }}
                variant="contained"
                size="medium"
                type="submit"
              >
                Update
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterStudent;
