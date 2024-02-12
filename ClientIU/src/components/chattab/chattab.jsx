import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Avatar,
  Icon,
  IconButton,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import React, { useState, useRef, useEffect } from "react";
import "./chattab.scss";
import ConnectCard from "./connectcard";
import { useDispatch } from "react-redux";
import { SetChatOpen } from "../../redux/chatSlice";
import ChatApp from "./components/chatAppDisplay";

function ChatTab() {
  const dispatch = useDispatch();
  const [isOpen, SetIsOpen] = useState(false);
  const ChatList = JSON.parse(localStorage.getItem("userData")).ChatTab;
  const handleClick = async () => {
    await dispatch(SetChatOpen(!isOpen));
    await SetIsOpen((pre) => !pre);
  };
  return (
    <>
      <Box sx={{}}>
        {isOpen && (
          <>
            <ChatApp></ChatApp>
          </>
        )}
        <Accordion
          disableGutters="true"
          sx={{
            width: "280px",
            display: "flex",
            bottom: "0px",
            right: "20px",
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
          <AccordionSummary
            expandIcon={<ExpandLessIcon />}
            sx={{ height: "40px" }}
          >
            <div className="logo-msg">
              <Typography variant="h5">Messages</Typography>
            </div>
            <div className="list-btn">
              <IconButton
                size="small"
                sx={{
                  height: "40px",
                  width: "40px",
                  position: "relative",
                  margin: "10px -20px 0px 148px",
                }}
              >
                <MapsUgcIcon fontSize="small"></MapsUgcIcon>
              </IconButton>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "Column",
            }}
          >
            {ChatList.map((element) => (
              <ConnectCard
                key={element.ChatId}
                Data={element}
                openAndClose={handleClick}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}

export default ChatTab;
