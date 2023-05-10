import React from "react";
import { MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
function HeaderStudent() {
  const navigate = useNavigate();
  const hanleClick = (e) => {
    navigate("/Student");
  };
  return (
    <>
      <MenuItem>
        <Link to="MyCv">
          <p>Recruitment Cv</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={hanleClick}>
        <p> Jobs </p>
      </MenuItem>
      <MenuItem>
        <Link to="ListJobApplied">
          <p>ListJobApplied</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="Report">
          <p>Report forms</p>
        </Link>
      </MenuItem>
    </>
  );
}

export default HeaderStudent;
