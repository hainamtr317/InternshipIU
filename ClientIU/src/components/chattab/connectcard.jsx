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
import { useSelector, useDispatch } from "react-redux";
import { SetChatName, SetChatId } from "../../redux/chatSlice";
function ConnectCard({ Data, openAndClose }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(SetChatName(Data.RoomName));
    await dispatch(SetChatId(Data.ChatId));
    openAndClose();
  };
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
        onClick={handleClick}
      >
        <Avatar sx={{ marginLeft: "10px", marginRight: "10px" }}></Avatar>
        <Typography sx={{}}>{Data.RoomName}</Typography>
      </CardActionArea>
    </Card>
  );
}

export default ConnectCard;
