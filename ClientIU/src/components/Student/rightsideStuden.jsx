import { Box, Button } from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
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
            width: "200px",
          }}
          startIcon={<ChatOutlinedIcon />}
        >
          Chat
        </Button>
        <Link to="Grading">
          <Button
            variant="outlined"
            sx={{
              width: "200px",
            }}
            startIcon={<GradingOutlinedIcon />}
          >
            Grading
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default StudentDisplayRightSide;
