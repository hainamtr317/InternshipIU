import { CardContent, CardMedia, Typography, Button, CardActionArea, Checkbox , Card, Avatar, IconButton } from '@mui/material';
import './chattab.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from "react";
function ConnectCard() {
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
        }}
      >
        <Avatar sx={{ marginLeft: "10px", marginRight: "10px" }}></Avatar>
        <div className="card-content">
          <Typography sx={{ width: "10px" }}>Name</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            From: msg content of aoifsjdofij sda
          </Typography>
        </div>
        <IconButton
          size="small"
          sx={{ height: "10px", width: "10px", margin: "-30px 9px 0 0" }}
        >
          <MoreHorizIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );
}

export default ConnectCard;