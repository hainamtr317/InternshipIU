import React from "react";
// import { makeStyles } from "@mui/styles";
import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const useStyles = {
  messageRow: {
    display: "flex",
  },
  messageRowRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  messageBlue: {
    position: "relative",
    marginLeft: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#A8DDFD",
    width: "90%",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #97C6E3",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #A8DDFD",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      left: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #97C6E3",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      left: "-17px",
    },
  },
  messageOrange: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f8e896",
    width: "90%",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #dfd087",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px",
    },
  },

  messageContent: {
    padding: 0,
    margin: 0,
  },
  messageTimeStampRight: {
    position: "absolute",
    fontSize: ".85em",
    fontWeight: "300",
    marginTop: "10px",
    bottom: "-3px",
    right: "5px",
  },

  orange: {
    color: deepOrange,
    backgroundColor: deepOrange[500],
    width: "20px",
    height: "20px",
  },
  avatarNothing: {
    color: "transparent",
    backgroundColor: "transparent",
    width: "20px",
    height: "20px",
  },
  displayName: {
    marginLeft: "20px",
  },
};

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "No Name";

  return (
    <>
      <Box sx={useStyles.messageRow}>
        <Avatar alt={displayName} sx={useStyles.orange} src={photoURL}></Avatar>
        <Box>
          <Box sx={useStyles.displayName}>{displayName}</Box>
          <Box sx={useStyles.messageBlue}>
            <Box>
              <Typography sx={useStyles.messageContent}>{message}</Typography>
            </Box>
            <Box sx={useStyles.messageTimeStampRight}>{timestamp}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const MessageRight = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <Box sx={useStyles.messageRowRight}>
      <Box sx={useStyles.messageOrange}>
        <Typography sx={useStyles.messageContent}>{message}</Typography>
        <Box sx={useStyles.messageTimeStampRight}>{timestamp}</Box>
      </Box>
    </Box>
  );
};
