import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Checkbox,
  Box,
  Card,
} from "@mui/material";
import "./jobcard.scss";
import React, { useState } from "react";
import JobModal from "./ModalJob";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import getTimePassed from "../SupportFunction/countTimepass";
import Axios from "../../config/axiosConfig";
function JobCard({ JobData }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let Job = JobData;
  return (
    <div className="Jobcardshow">
      <Card
        className="jobcard"
        sx={{
          height: 150,
          width: 300,
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          overflow: "hidden",
          margin: "5px 5px 5px 0px",
        }}
      >
        <CardActionArea onClick={handleOpen} sx={{}} className="actioncard">
          <Box className="content">
            <CardMedia
              sx={{ height: "70px", width: "70px" }}
              component="img"
              image={Job.image}
              alt="green iguana"
            />

            <CardContent
              sx={{
                height: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  marginLeft: "-12px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "medium",
                  fontWeight: "bold",
                  color: "#1976d2",
                }}
              >
                {Job.nameJob}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  marginLeft: "-12px",
                  fontWeight: "bold",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {Job.company}
              </Typography>
            </CardContent>
          </Box>
          <CardContent sx={{ zoom: 0.8, marginTop: "-10px" }}>
            <Typography sx={{ marginLeft: "5px" }} component="p">
              <PaidOutlinedIcon fontSize="small" />
              {Job.salary}
            </Typography>

            <Typography sx={{ marginLeft: "5px" }} component="p">
              <LocationOnOutlinedIcon fontSize="small" />
              {Job.Address}
            </Typography>
            <Typography sx={{ marginLeft: "5px" }} component="p">
              <UpdateIcon fontSize="small" />
              {getTimePassed(new Date(Job.updatedAt))}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
            marginTop: "-50px",
          }}
        >
          <Checkbox
            sx={{}}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </Box>
      </Card>
      <JobModal Job={Job} Open={open} Close={handleClose}></JobModal>
    </div>
  );
}

export default JobCard;
