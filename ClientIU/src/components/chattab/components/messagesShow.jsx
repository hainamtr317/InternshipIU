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

import { MessageLeft, MessageRight } from "./send-message";
import React, { useState, useRef, useEffect } from "react";
import getTime from "../../SupportFunction/TimeMessage";
function MessageShow({ socket, sender }) {
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const messagesColumnRef = useRef(null);
  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesReceived((state) => [...state, data]);
    });

    // Remove event listener on component unmount
    return () => socket.off("receive_message");
  }, [socket]);

  useEffect(() => {
    // Last 100 messages sent in the chat room (fetched from the db in backend)
    socket.on("last_100_messages", (last100Messages) => {
      console.log("Last 100 messages:", last100Messages);
      setMessagesReceived(last100Messages);
    });

    return () => socket.off("last_100_messages");
  }, [socket]);

  // Scroll to the most recent message
  useEffect(() => {
    messagesColumnRef.current.scrollTop =
      messagesColumnRef.current.scrollHeight;
  }, [messagesRecieved]);
  return (
    <Paper
      sx={{
        overflowY: "scroll",
        height: "100%",
        width: "100%",
      }}
      ref={messagesColumnRef}
    >
      {messagesRecieved.map((e) => {
        if (e.sender == sender) {
          return (
            <MessageRight
              message={e.mgs}
              displayName="you"
              timestamp={getTime(new Date(e.createdAt))}
            />
          );
        } else {
          return (
            <MessageLeft
              message={e.mgs}
              displayName="teacher"
              timestamp={getTime(new Date(e.createdAt))}
            />
          );
        }
      })}
    </Paper>
  );
}

export default MessageShow;
