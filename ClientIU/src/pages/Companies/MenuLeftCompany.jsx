import { MenuList, MenuItem } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

function MenuLeftCompany() {
  const navigate = useNavigate();
  const hanleClick = (e) => {
    navigate("/Company");
  };
  const handleCompanyClick = (e) => {
    navigate("/Company/CompanyManager");
  };
  const handleJobsClick = (e) => {
    navigate("/Company/JobsManager");
  };
  return (
    <>
      <MenuList>
        <MenuItem onClick={hanleClick}>
          <p> View Job</p>
        </MenuItem>
        <MenuItem onClick={handleCompanyClick}>
          <p>Company Information</p>
        </MenuItem>
        <MenuItem onClick={handleJobsClick}>
          <p>Manger Jobs</p>
        </MenuItem>
      </MenuList>
    </>
  );
}

export default MenuLeftCompany;
