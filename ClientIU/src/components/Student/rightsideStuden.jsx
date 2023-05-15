import { Box, Button } from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from "react-router-dom";
function StudentDisplayRightSide() {
  return (
    <>
      <Box
        sx={{
          position: { xs: "relative", md: "fixed" },
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          marginLeft: "10px",
          height: "auto",
          width: "auto",
          display: { xs: "none", md: "flex" },
          zIndex: "6",
          flexDirection: "column",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "300px",
          }}
          startIcon={<DriveFileRenameOutlineIcon />}
        >
          Register Your Job
        </Button>
        <Link to="Grading">
          <Button
            variant="outlined"
            sx={{
              width: "300px ",
            }}
            startIcon={<DriveFileRenameOutlineIcon   />}
          >
            Register Instructor information
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default StudentDisplayRightSide;
