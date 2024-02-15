import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";
function ReportCard() {
  return (
    <>
      <Card
        className="Cvcard"
        sx={{
          height: 250,
          width: 400,
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          overflow: "hidden",
          margin: "5px 5px 5px 0px",
        }}
      >
        <CardActionArea height="90%">
          <a
            href="https://docs.google.com/document/d/1PvPXeMQp3OWhRx_sOxfR1gIZZYCXGZIlD06IeLhZgMc/edit"
            target="_blank"
          >
            <CardMedia
              sx={{
                marginTop: "20px",
              }}
              class=" overflow-hidden pointer-events-none"
              component="object"
              data="https://docs.google.com/document/d/1PvPXeMQp3OWhRx_sOxfR1gIZZYCXGZIlD06IeLhZgMc/edit"
              height="80%"
              width="100%"
            ></CardMedia>
          </a>
        </CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              marginTop: "10px",
            }}
          >
            Report form
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ReportCard;
