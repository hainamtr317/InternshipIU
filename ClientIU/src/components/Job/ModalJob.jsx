import React from "react"

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import UpdateIcon from "@mui/icons-material/Update";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Divider,
  Paper,
} from "@mui/material";

function JobModal(props) {
  const Job = props.Job;
  console.log(Job)
  const direction = "/Student/job/" + Job._id;
  
  const navigate = useNavigate();
  const handleclickJobName = ()=>{
    navigate(direction)
  }
  const handleCompanyRedirect = ()=>{
    navigate("/Student/Company/"+Job.company);
  }
  const handleApplybtn = () => {
    navigate("/Student/job/"+Job._id+"/Apply");
  };
  const listSkill = ["reactjs", "nodejs", "cloud"];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid whitesmoke",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const headerModal = {};
  return (
    <div>
      <Modal
        open={props.Open}
        onClose={props.Close}
        aria-labelledby="modal-Job"
        aria-describedby="modal-modal-show-job"
      >
        <Box sx={style}>
          <CardContent id="header-modal-job" sx={headerModal}>
              <Typography onClick={handleclickJobName} id="Jos-Title" variant="h4" component="h">
                {Job.nameJob}
              </Typography>
            
            
              <Typography id="Jos-Title" variant="caption" component="p" onClick={handleCompanyRedirect}>
                {Job.company}
              </Typography>
         
            <Button variant="outlined" onClick={handleApplybtn}>
              Apply Now
            </Button>
            <Checkbox
              sx={{}}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </CardContent>
          <Divider />
          <CardContent>
            {listSkill.map((skill) => (
              <Button variant="outlined">{skill}</Button>
            ))}
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                height: "auto",
              }}
            >
              <PaidOutlinedIcon fontSize="small" />
              <Typography sx={{ marginLeft: "10px" }} component="p">
                {Job.salary}
              </Typography>
            </Paper>

            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                height: "auto",
              }}
            >
              <LocationOnOutlinedIcon fontSize="small" />
              <Typography sx={{ marginLeft: "10px" }} component="p">
                {Job.Address}
                <Link sx={{ marginLeft: "5px" }}>
                  <Typography sx={{ color: "blue" }}>Map</Typography>
                </Link>
              </Typography>
            </Paper>

            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                height: "auto",
              }}
            >
              <WorkOutlineOutlinedIcon fontSize="small" />
              <Typography sx={{ marginLeft: "10px" }} component="p">
                at Company{" "}
              </Typography>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                height: "auto",
              }}
            >
              <UpdateIcon fontSize="small" />
              <Typography sx={{ marginLeft: "10px" }} component="p">
                {" "}
                {Job.update}
              </Typography>
            </Paper>
          </CardContent>
          <Divider />
          <Typography id="modal-job-description" sx={{ mt: 2 }}>
            Job Description Classmethod Vietnam is a joint venture between
            SupremeTech and Classmethod Inc. and is the sixth branch of
            Classmethod Inc. outside of Japan. So what are SupremeTech and
            Classmethod? SupremeTech is a Technology Company focusing on web
            service, video streaming, video distribution and AI technology-based
            in Da Nang with more than 150 members experienced in the Japanese
            software development market for more than 8 years. Classmethod Inc.
            provides technical support to companies in the areas of Amazon Web
            Services, data analytics, mobile, IoT, AI/machine learning, and
            more. In AWS support, the company has been continuously certified as
            a top-tier Premier Consulting Partner since 2015, and was awarded
            "AWS Consulting Partner of the Year" in 2018 and 2020, and "AWS
            Services Partner of the Year-Japan" in 2021. After a long time being
            business partners, in 2022, Classmethod and SupremeTech decided to
            hold each other's hands tighter to settle a business together. And
            Classmethod Vietnam was born like that.
            <Link> show more</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default JobModal;