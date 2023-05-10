import * as React from "react";
import { Grow, Box, Typography } from "@mui/material";
function ShowChat(props) {
  return (
    <>
      <Grow
        in={props.Open}
        style={{ transformOrigin: "0 0 0" }}
        {...(props.Open ? { timeout: 1000 } : {})}
      >
        <Box
          sx={{
            height: "250px",
            width: "150px",
            borderStyle: "groove",
            border: "2px whitesmoke solid",
            boxShadow: "8",
          }}
        ></Box>
      </Grow>
    </>
  );
}

export default ShowChat;
