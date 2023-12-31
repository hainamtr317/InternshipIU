import React, { useMemo, useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { Link, redirect, useNavigate } from "react-router-dom";
import TeacherModal from "./modalforTeacher";
import StudentModal from "./modelforStudent";
import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Divider,
  Paper,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import RegisterStudent from "./register/registerStudent";
import RegisterTeacher from "./register/registerTeacher";

function RegisterModal({ Open, Close, User }) {
  const [Role, setRole] = useState("student");
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
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
  };

  return (
    <>
      <Modal
        open={Open}
        onClose={Close}
        aria-labelledby="modal-user"
        aria-describedby="modal-user"
      >
        <Box sx={style}>
          <Box>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                setRole:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  onChange={handleChange}
                  label="student"
                />
                <FormControlLabel
                  value="teacher"
                  control={<Radio />}
                  label="teacher"
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          {Role == "student" && <RegisterStudent Role={Role}></RegisterStudent>}
          {Role == "teacher" && <RegisterTeacher Role={Role}></RegisterTeacher>}
        </Box>
      </Modal>
    </>
  );
}

export default RegisterModal;
