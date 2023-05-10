import { MenuList, MenuItem } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

function MenuLeftTeacher() {
  const navigate = useNavigate();
  const hanleClick = (e) => {
    navigate("/Teacher");
  };
  return (
    <>
      <MenuList>
        <MenuItem onClick={hanleClick}>
          <p> Students List </p>
        </MenuItem>
        <MenuItem>
          <Link to="GradeList">
            <p>Grade</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="Report">
            <p>Report</p>
          </Link>
        </MenuItem>
      </MenuList>
    </>
  );
}

export default MenuLeftTeacher;
