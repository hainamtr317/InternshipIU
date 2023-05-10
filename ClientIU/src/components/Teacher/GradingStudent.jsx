import {
  Box,
  Divider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import React from "react";
function GradingStudent() {
  return (
    <>
      <Box>
        <Typography
          sx={{
            marginLeft: "20px",
            color: "#1976d2",
            marginTop: "20px",
          }}
          variant="h3"
        >
          <b>Grading</b>
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            marginLeft: "20px",
            marginTop: "20px",
          }}
          className="StudentReport"
        >
          <Typography
            variant="h5"
            sx={{
              color: "#1976d2",
            }}
          >
            Student Report:
          </Typography>
          <Divider></Divider>
          Here to display Student Report
        </Box>
        <Box
          sx={{
            marginLeft: "20px",
            marginTop: "20px",
          }}
          className="gradingForm "
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Good"
            />
            <FormControlLabel required control={<Checkbox />} label="Ok" />
            <FormControlLabel disabled control={<Checkbox />} label="Bad" />
          </FormGroup>
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
              Grading
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GradingStudent;
