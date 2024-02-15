import {
  Box,
  Container,
  Paper,
  Avatar,
  Typography,
  Divider,
  Step,
  StepLabel,
  Stepper,
  LinearProgress,
} from "@mui/material";
import { MenuItem } from "@mui/material";
import Axios from "../../config/axiosConfig";
function AnnounceCard({ announcement }) {
  console.log(announcement);
  const handleClickAnnounceCard = async () => {
    await Axios.post("/api/users/readAnnounces", { ID: announcement._id }).then(
      (res) => {
        if (res.data.success) {
          return true;
        } else {
          console.log(res.data.mgs);
        }
      }
    );
  };
  return (
    <>
      <MenuItem
        sx={{
          flexDirection: "column",
          width: "270px",
          textAlign: "start",
          justifyContent: "start",
          left: "0px",
        }}
        onClick={handleClickAnnounceCard}
      >
        <Typography
          sx={{
            textAlign: "start",
            justifyContent: "start",
            overflow: "hidden",
          }}
        >
          Send From:{announcement.whoSend}
        </Typography>
        <Typography
          sx={{
            textAlign: "start",
            justifyContent: "start",
            overflow: "hidden",
          }}
        >
          {announcement.announcementContent}
        </Typography>
      </MenuItem>
    </>
  );
}

export default AnnounceCard;
