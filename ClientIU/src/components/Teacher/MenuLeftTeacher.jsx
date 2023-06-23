import { MenuList, MenuItem } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";


function MenuLeftTeacher() {
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
      <MenuList>
        <MenuItem onClick={hanleClick}>
          <p> Students List </p>
        </MenuItem>
        <MenuItem onClick={handleGradeClick}>
          <p>Grade</p>
        </MenuItem>
        <MenuItem onClick={handleReportClick}>
          <p>Report</p>
        </MenuItem>
      </MenuList>
    </>
  );
}

export default MenuLeftTeacher;
