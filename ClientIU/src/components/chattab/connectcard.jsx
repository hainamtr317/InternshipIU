import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Checkbox,
  Card,
  Avatar,
  IconButton,
} from "@mui/material";
import "./chattab.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";
function ConnectCard({ openAndClose }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        boxShadow: "8",
        marginBottom: "10px",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "row",
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          justifyContent: "flex-start",
        }}
        onClick={openAndClose}
      >
        <Avatar sx={{ marginLeft: "10px", marginRight: "10px" }}></Avatar>
        <Typography sx={{}}>Name</Typography>
      </CardActionArea>
    </Card>
  );
}

export default ConnectCard;
