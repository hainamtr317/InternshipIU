import {
  Box,
  Divider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Modal,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import React, { useState } from "react";
import Axios from "../../config/axiosConfig";
function ModalAnnouncementToStudent(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "auto",
    bgcolor: "white",
    border: "2px solid whitesmoke",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const [announceContent, SetAnnounceContent] = useState("");
  const handleCreateAnnounce = async () => {
    if (announceContent == "") {
      alert("input your content");
    } else {
      if (confirm("want send announce is:" + " " + announceContent)) {
        const SenderId = await JSON.parse(localStorage.getItem("userData"))
          .userId;
        try {
          await Axios.post("/api/admin/createAnnounce", {
            From: SenderId,
            To: props.Student.StudentId,
            contentAnnounce: announceContent,
          }).then((res) => {
            if (res.data.success) {
              alert("send success");
            } else {
              alert("send have error");
            }
          });
        } catch (error) {
          console.log(error.toString());
        }
      }
    }
  };
  return (
    <>
      <Modal open={props.Open} onClose={props.Close}>
        <Box sx={style}>
          <Typography
            sx={{
              marginLeft: "20px",
              color: "#1976d2",
              marginTop: "20px",
            }}
            variant="h3"
          >
            <b>Announcement</b>
          </Typography>
          <Divider></Divider>
          <Container>
            <Typography variant="h5">
              {" "}
              To Student id : {props.Student.StudentId}{" "}
            </Typography>
          </Container>

          <Box
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
            className="gradingForm "
          >
            <Typography>Comment:</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"
              onChange={(e) => SetAnnounceContent(e.target.value)}
              style={{ width: 200 }}
            />
            <Box
              sx={{
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<RestartAltOutlinedIcon></RestartAltOutlinedIcon>}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handleCreateAnnounce}
              >
                announce
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ModalAnnouncementToStudent;
