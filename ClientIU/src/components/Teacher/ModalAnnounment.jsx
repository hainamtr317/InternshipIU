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
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import React from "react";
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
            <Typography variant="h5"> To Student id : </Typography>
          </Container>

          <Box
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
            className="gradingForm "
          >
            {/* <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Good"
              />
              <FormControlLabel required control={<Checkbox />} label="Ok" />
              <FormControlLabel disabled control={<Checkbox />} label="Bad" />
            </FormGroup> */}
            <Typography>Comment:</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"
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
              <Button variant="contained" size="large">
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
