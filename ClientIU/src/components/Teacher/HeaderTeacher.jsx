import React from "react";
import { MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function HeaderTeacher() {
  const navigate = useNavigate();
  const hanleClick = (e) => {
    navigate("/Teacher");
  };
  const handleGradeClick = (e) => {
    navigate("/Teacher/GradeList");
  };
  const handleReportClick = (e) => {
    navigate("/Teacher/Report");
  };
  return (
    <>
      <MenuItem onClick={hanleClick}>
        <p> Students List </p>
      </MenuItem>
      <MenuItem onClick={handleGradeClick}>
        <p>Grade</p>
      </MenuItem>
      <MenuItem onClick={handleReportClick}>
        <p>Report</p>
      </MenuItem>
    </>
  );
}

export default HeaderTeacher;
