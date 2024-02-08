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
import { io } from "socket.io-client";

const host = "http://localhost:7789";

function ChatApp({ NameRoom }) {
  const [socketRef, setSocketRef] = useState();
  useEffect(() => {
    // setSocketRef(socketIOClient.connect(host));
    setSocketRef(io.connect(host));
  }, []);

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
        <Typography variant="h6">{NameRoom}</Typography>
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
        <Paper
          sx={{
            overflowY: "scroll",
          }}
        >
          <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="テスト"
            avatarDisp={false}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />
        </Paper>
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
          <TextInput socket={socketRef} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ChatApp;
