import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import { Button, FormControl } from "@mui/base";

const useStyles = {
  wrapForm: {
    display: "flex",
    justifyContent: "center",
    width: "95%",
  },
  wrapText: {
    width: "auto",
  },
  button: {},
};

export const TextInput = ({ socket, room, sender }) => {
  const [message, setMessage] = useState("");
  const sendMessage = async () => {
    if (message !== "") {
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      await socket.emit("send_message", { message });
      setMessage("");
    }
  };
  return (
    <>
      <Box sx={useStyles.wrapForm}>
        <TextField
          id="standard-text"
          label="input you text"
          sx={useStyles.wrapText}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="small"
        />
        <Button sx={useStyles.button} onClick={sendMessage}>
          <SendIcon />
        </Button>
      </Box>
    </>
  );
};
