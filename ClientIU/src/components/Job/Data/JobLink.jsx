import {
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Card,
} from "@mui/material";

import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
function JobLink({ JobData }) {
  const direction = "/Student/job/" + JobData.JobId;

  const navigate = useNavigate();
  const handleOpen = () => {
    navigate(direction);
  };
  return (
    <div className="Jobcardshow">
      <Card
        className="jobcard"
        sx={{
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          overflow: "hidden",
          margin: "5px 5px 5px 0px",
        }}
      >
        <CardActionArea onClick={handleOpen} sx={{}} className="actioncard">
          <Box className="content">
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
                {JobData.JobName}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default JobLink;
