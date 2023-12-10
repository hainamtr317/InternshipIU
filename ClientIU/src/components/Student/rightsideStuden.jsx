import { Box, Button } from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { OpenGrade, OpenAnnounce } from "../../redux/modalActionSlice";
function StudentDisplayRightSide() {
  const dispatch = useDispatch();

  const handleclickGrading = () => {
    dispatch(OpenGrade(true));
  };
  const handleclickAnnouce = () => {
    dispatch(OpenAnnounce(true));
  };
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
          onClick={handleclickAnnouce}
          startIcon={<DriveFileRenameOutlineIcon />}
        >
          Register Your Job
        </Button>

        <Button
          variant="outlined"
          sx={{
            width: "300px ",
          }}
          onClick={handleclickGrading}
          startIcon={<DriveFileRenameOutlineIcon />}
        >
          Register Instructor information
        </Button>
      </Box>
    </>
  );
}

export default StudentDisplayRightSide;
