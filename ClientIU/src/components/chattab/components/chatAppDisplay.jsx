import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Avatar,
  Icon,
  IconButton,
  Paper,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import socketIOClient from "socket.io-client";
import { MessageLeft, MessageRight } from "./send-message";
import { TextInput } from "./Textinput";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChatData } from "../../../redux/chatSlice";
import { io } from "socket.io-client";
import MessageShow from "./messagesShow";

const host = "http://localhost:7789";

function ChatApp() {
  let DataOfChat = useSelector(ChatData);
  const Sender = JSON.parse(localStorage.getItem("userData")).userId;
  const [socketRef, setSocketRef] = useState(io.connect(host));
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const LeaveChat = async () => {
      if (!DataOfChat.openChat) {
        socketRef.emit("leave_room", { room: DataOfChat.ChatId });
      }
    };
    LeaveChat();
  }, [DataOfChat]);
  useEffect(() => {
    const initChat = async () => {
      socketRef.emit("join_room", { room: DataOfChat.ChatId });
      await setLoading(false);
    };
    initChat();
  }, []);
  if (isLoading) {
    return <Box>IsLoading</Box>;
  }
  console.log(DataOfChat);
  return (
    <Accordion
      disableGutters="true"
      sx={{
        width: "280px",
        display: "flex",
        bottom: "0px",
        right: "325px",
        position: "fixed",
        borderStyle: "groove",
        border: "2px whitesmoke solid",
        boxShadow: "8",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <AccordionSummary expandIcon={<ExpandLessIcon />} sx={{ height: "40px" }}>
        <Typography variant="h6">{DataOfChat.ChatName}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          flexDirection: "Column",
          width: "80vw",
          height: "80vh",
          maxWidth: "278px",
          maxHeight: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <MessageShow
          socket={socketRef}
          room={DataOfChat.ChatId}
          sender={Sender}
        ></MessageShow>
        <Box
          sx={{
            mt: "5px",
            height: "50px",
            width: "100%",
            borderStyle: "groove",
            border: "2px whitesmoke solid",
            boxShadow: "8",
          }}
        >
          <TextInput
            socket={socketRef}
            sender={Sender}
            room={DataOfChat.ChatId}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ChatApp;
