import { Box, Typography, Divider, Button } from "@mui/material";
import JobCard from "./Jobcard";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Cvcard from "../Cv/Cvcard";
import SendIcon from "@mui/icons-material/Send";
import { JobData } from "./Data/jobData";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ApplyJob() {
  const [value, setValue] = useState("");
  const Jobid = useParams().job_id;
  const Job = JobData.find((job) => job.id === Jobid);
  console.log(Job);
  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "#1976d2",
            marginLeft: "20px",
            marginTop: "20px",
          }}
          variant="h3"
        >
          <b>Apply Form:</b>
        </Typography>
        <Divider></Divider>
        <Box>
          <Typography
            sx={{
              color: "#1976d2",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            Your job want apply
          </Typography>
          <Divider></Divider>
          <Box
            sx={{
              marginLeft: "70px",
            }}
          >
            <JobCard Job={Job} />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#1976d2",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            Your information:
          </Typography>
          <Divider></Divider>
          <Box
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", lg: "row" },
                alignItems: "flex-start",
                justifyContent: "space-around",
              }}
            >
              <Box className="infoStu">
                <Typography>Student Name</Typography>
                <Box>
                  <Typography>Contract:</Typography>
                  <Box
                    sx={{
                      marginLeft: "50px",
                    }}
                  >
                    <Typography> Email:</Typography>
                    <Typography>Phone Number:</Typography>
                    <Typography>Address:</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginLeft: "60px",
                }}
              >
                <Typography> Your CV:</Typography>
                <Cvcard></Cvcard>
              </Box>
            </Box>
            <Box sx={{ marginTop: "40px", marginLeft: "70px" }}>
              <Typography variant="h6">Short Introduction:</Typography>
              {/* <TextareaAutosize
                aria-label="minimum height"
                minRows={7}
                placeholder="write your short introduction here"
                style={{ marginLeft: "-40px", width: "100%" }}
              /> */}
              <Box sx={{ ml: "-50px", height: "100%" }}>
                <ReactQuill value={value} onChange={setValue} />
              </Box>
            </Box>
            <Button
              size="large"
              sx={{
                marginLeft: "40%",
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ApplyJob;
