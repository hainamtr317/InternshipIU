import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";

import CvModal from "./Cvmodal";

function Cvcard({ CvData }) {
  const [isMain] = useState(false);
  const [ischeck, setCheck] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickmain = () => {
    setCheck((pre) => !pre);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        className="Cvcard"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 250,
          width: 400,
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          overflow: "hidden",
          margin: "5px 5px 5px 0px",
        }}
      >
        <CardActionArea
          class="z-20"
          sx={{
            flexGrow: "3",
          }}
          onClick={handleOpen}
        >
          <Box
            class="z-10"
            sx={{
              zIndex: "-2",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <object
              class="z-0 ml-5 mt-2"
              data="https://localhost:4443/display/UsersCv/1706508227865MyCv1.pdf"
              align="middle"
              width="90%"
              height="90%"
            ></object>
          </Box>
        </CardActionArea>
        <CardContent
          sx={{
            flexGrow: "1",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginTop: "10px",
            }}
          >
            Name of file
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "170px",
              marginTop: "-35px",
            }}
          >
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            {ischeck && (
              <Button
                sx={{ marginLeft: "10px" }}
                variant="contained"
                onClick={handleClickmain}
              >
                MainCv
              </Button>
            )}
            {!ischeck && (
              <Button
                sx={{ marginLeft: "10px" }}
                variant="outlined"
                onClick={handleClickmain}
              >
                MainCv
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
      <CvModal Open={open} Close={handleClose} CvNumber="1"></CvModal>
    </>
  );
}

export default Cvcard;
