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
import Axios from "../../../config/axiosConfig";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MultiSelect from "./MutiSelect";

function TeacherModal({ User }) {
  const [names, setNames] = useState([]);
  const [listStudent, setListStudent] = useState([]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid whitesmoke",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
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
    var nameT = e.target.elements.name.value;
    var emailT = e.target.elements.email.value;
    var phoneT = e.target.elements.phone.value;
    var departmentT = e.target.elements.department.value;
    const dataUpdate = {
      name: nameT,
      email: emailT,
      phone: phoneT,
      department: departmentT,
    };
    console.log(dataUpdate);
    try {
      await Axios.put("/api/Teacher", {
        teacherId: User._id,
        data: dataUpdate,
      }).then((res) => {
        if (res.data.success) {
          alert("update success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getNames = async () => {
      const StudentList = await Axios.get("/api/admin/getStudentListID").then(
        async (res) => {
          if (res.data.success) {
            if (User.ListStudent.length > 0) {
              await Promise.all(
                User.ListStudent.map((e) => {
                  return e.StudentId;
                })
              ).then((value) => {
                setListStudent(value);
                setNames(res.data.data);
              });
            } else {
              setNames(res.data.data);
            }
          }
        }
      );
    };
    getNames();
  }, []);

  return (
    <Box sx={style}>
      <h3>Hello {User.TeacherID}</h3>

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
                Name:
              </Typography>
            </Box>
            <Box>
              <TextField
                id="name"
                name="name"
                label="name"
                sx={{ ml: "10px" }}
                defaultValue={User.name}
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
                id="email"
                name="email"
                label="email"
                sx={{ ml: "10px" }}
                defaultValue={User.email}
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
                id="phone"
                name="phone"
                label="phone"
                sx={{ ml: "10px" }}
                defaultValue={User.phone}
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
                id="department"
                name="department"
                label="department"
                sx={{ ml: "10px", width: "400px" }}
                defaultValue={User.Department}
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
        {/* Box for handle add student and teacher */}
        <Box sx={(teacherInfoDisplay, { mt: "20px" })}>
          <Typography variant="h6">Students:</Typography>
          <Box>
            {names.length > 0 ? (
              <MultiSelect
                teacherId={User.TeacherID}
                names={names}
                Students={listStudent}
              ></MultiSelect>
            ) : (
              <>
                <Typography>is Loading</Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TeacherModal;
