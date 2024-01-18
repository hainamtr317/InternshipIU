import React, { useEffect, useMemo, useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Chip,
  Select,
  FormControl,
  Autocomplete,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MultiSelect from "../MutiSelect";
import Axios from "../../../../config/axiosConfig";

function RegisterTeacher({ Role }) {
  const [names, setNames] = useState([]);
  const [listStudent, setListStudent] = useState([]);
  const style = {
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid whitesmoke",
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
    borderRadius: "10px",
    boxShadow: 24,
  };

  const handleClickUpdate = async (e) => {
    e.preventDefault();
    var userIdT = e.target.elements.userId.value;
    var passT = e.target.elements.email.value;
    var nameT = e.target.elements.name.value;
    var emailT = e.target.elements.email.value;
    var phoneT = e.target.elements.phone.value;
    var departmentT = e.target.elements.department.value;
    const dataRegisterUser = {
      userId: userIdT,
      password: passT,
      roles: Role,
    };
    const dataRegisterTeacher = {
      TeacherID: userIdT,
      name: nameT,
      email: emailT,
      phone: phoneT,
      department: departmentT,
    };
    try {
      await Axios.post("/api/users/register", dataRegisterUser).then(
        async (res) => {
          if (res.data.success) {
            alert("create user success");
            await Axios.post("/api/teacher", {
              userId: res.data.data,
              data: dataRegisterTeacher,
            }).then((res2) => {
              if (res2.data.createSuccess) {
                alert("create Teacher success", res2.data.data);
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
  );
}

export default RegisterTeacher;
