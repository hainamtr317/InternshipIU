import React, { useEffect, useState } from "react";
import { JobData } from "../../components/Job/Data/jobData";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CompanyCard from "../../components/Company/CompanyCard";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate, useParams } from "react-router-dom";
import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Divider,
  Paper,
  Link,
  CardMedia,
  Container,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import Axios from "../../config/axiosConfig";

function Jobpage() {
  const listSkill = ["reactjs", "nodejs", "cloud"];
  const { job_id } = useParams();
  const [Job,setJob]= useState([])
  
  const styles = {
    bgcolor: "white",
    maxWidth: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  // const Job = JobData.find((job) => {
  //   if (job.id === job_id) return job;
  // });
 useEffect(()=>{
  const getJobData =async() =>{ 
    const data = await Axios.post("/api/jobs/getJob",{id:job_id}).then((res)=>{
      setJob(res.data.job)
    })
  }
  getJobData()
 },[])
 
  const navigate = useNavigate();
  const direction = "/Student/job/" + job_id + "/Apply";
  const handleApplybtn = () => {
    navigate(direction);
  };
  return (
    <Box sx={styles}>
      <Box
        sx={{
          position: "sticky",
          top: 50,
          bgcolor: "white",
          zIndex: 4,
        }}
      >
        <Container
          id="header-content"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{
              height: "100px",
              width: "100px",
            }}
            component="img"
            image={Job.image}
            alt="green iguana"
          />
          <CardContent id="header-job">
            <Typography id="Job-Title" variant="h4" component="h">
              {Job.nameJob}
            </Typography>
            <Typography id="company-Title" variant="caption" component="p">
              {Job.company}
            </Typography>
          </CardContent>
        </Container>
        <Container>
          <Button
            variant="outlined"
            sx={{
              width: "80%",
            }}
            onClick={handleApplybtn}
          >
            Apply Now
          </Button>
          <Checkbox
            sx={{}}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </Container>
      </Box>
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
            <Link sx={{ marginLeft: "5px" }}>Map</Link>
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
      <CardContent>
        <h2 class="job-details__second-title">Top 3 Reasons To Join Us</h2>
        <div class="job-details__top-reason-to-join-us">
          <ul>
            <li>Work with Innovative Scandinavian SaaS</li>
            <li>Work with experienced software engineers worldwide</li>
            <li>Scandinavian Work Culture</li>
          </ul>
        </div>
        <h2 class="job-details__second-title">Job Description</h2>
        <div class="job-details__paragraph">
          <p>
            <strong>Pythagoras</strong> is looking for
            <strong> full stack Java developers</strong> to work in our
            beautiful office in <strong>HANOI, VIETNAM</strong>.
          </p>
          <p>
            <strong>Pythagoras</strong> develops IT solutions and services for
            managing strategic information within Property &amp; Real Estate and
            Facilities Management. We also engage in work within Smart
            Buildings, AR and AI. Using the latest technology, we create
            solutions and platforms that help our customers digitize their
            operations.
          </p>
          <p>
            We work continuously to be an attractive employer. We are a company
            that believes in the environment and gender equality. With us, you
            always have the opportunity to grow and develop. Currently we have
            development teams in Sweden and Australia, and now we want to
            further scale our development capacity by finding new, talented
            colleagues to start up our Next office in Hanoi, Vietnam.
          </p>
          <p>
            Note: <strong>Online interview is supported.</strong>
          </p>
        </div>
        <h2 class="job-details__second-title">Your Skills and Experience</h2>
        <div class="job-details__paragraph">
          <p>
            <span>
              You will be part of one of our cross-functional agile development
              teams and work with the development of our property &amp; facility
              management system – Pythagoras Web. You have a good mindset of
              production development and you will be involved in enhancing and
              optimizing existing solutions as well as developing completely new
              functions closely together with our business people. You are a
              team player and you will collaborate with the other team members
              to achieve great goals. You have a broad technical competence and
              you are easily familiar with new challenges. You are passionate
              about finding the best solution for any given problem.
            </span>
          </p>
          <p>
            <strong>Minimum requirements:</strong>
          </p>
          <ul>
            <li>Engineering education in computer science or equivalent</li>
            <li>5+ years of software development experience</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL (MySQL)</li>
            <li>HTML/CSS</li>
            <li>RESTful web services</li>
            <li>Agile methods (Scrum)</li>
            <li>Excellent problem-solving skills</li>
            <li>
              <strong>
                Strong verbal and written communication in English
              </strong>
            </li>
          </ul>
          <p>
            <strong>Will be advanced if you are skilled in:</strong>
          </p>
          <ul>
            <li>jQuery</li>
            <li>Hibernate</li>
            <li>Gitlab</li>
            <li>Jenkins</li>
          </ul>
        </div>
        <h2 class="job-details__second-title">Why You'll Love Working Here</h2>
        <div class="job-details__paragraph">
          <p>
            <strong>You will be:</strong>
          </p>
          <ul>
            <li>
              Developing software solutions for Property &amp; Real
              Estate/Facilities Management in a leading company
            </li>
            <li>
              Solving problems together with a skilled, cross functional team
              with very helpful colleagues
            </li>
            <li>
              Joining a fast-growing company who aims to triple the number of
              employees during the next years
            </li>
            <li>
              Living on our Scandinavian culture and office while working in
              Agile environment that has strong team spirit, openness, unceasing
              creativity and innovation
            </li>
          </ul>
          <p>
            <strong>What will you get?</strong>
          </p>
          <ul>
            <li>
              <strong>
                You’ll get to work with experienced software engineers worldwide
                at market leading, innovative Scandinavian SaaS company looking
                to accelerate growth
              </strong>
            </li>
            <li>
              <strong>
                Scandinavian Work Culture: creativity, innovation and work-life
                balance
              </strong>
            </li>
            <li>
              Competitive salary and 100% official salary during the probation
              period
            </li>
            <li>Annual review and 13th month salary</li>
            <li>Premium healthcare and &amp; accident insurance</li>
            <li>
              Wellness package supports employees stay healthy and wealthy
            </li>
            <li>Exciting company outing/events and team building activities</li>
            <li>On-site and training opportunities in Nordic</li>
            <li>Modern working environment</li>
          </ul>
        </div>
      </CardContent>
      <CompanyCard jobid={job_id} />
    </Box>
  );
}

export default Jobpage;
