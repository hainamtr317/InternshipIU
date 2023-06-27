import { MenuList, MenuItem } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

function MenuLeftAdmin() {
  
  const navigate = useNavigate();
  const hanleClick = (e) => {
    navigate("/Admin");
  };
  const handleCompanyClick = (e) => {
    navigate("/Admin/CompanyManager");
  };
  const handleJobsClick = (e) => {
    navigate("/Admin/JobsManager");
  };
  return (
    <>
      <MenuList>
        <MenuItem onClick={hanleClick}>
          <p> Manager User</p>
        </MenuItem>
        <MenuItem onClick={handleCompanyClick}>
            <p>Manger Company</p>
        </MenuItem>
        <MenuItem onClick={handleJobsClick}>
            <p>Manger Jobs</p>
        </MenuItem>
      </MenuList>
    </>
  );
}

export default MenuLeftAdmin;
