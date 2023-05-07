import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";

import CvModal from "./Cvmodal";

function Cvcard() {
  const [isMain] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("open");
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        className="Cvcard"
        sx={{
          height: 250,
          width: 400,
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          overflow: "hidden",
          margin: "5px 5px 5px 0px",
        }}
      >
        <CardActionArea height="90%" onClick={handleOpen}>
          <CardMedia
            sx={{
              marginTop: "20px",
            }}
            component="iframe"
            src="/Assets/MyCv1.pdf"
            height="80%"
            width="100%"
            allowfullscreen="true"
          ></CardMedia>
        </CardActionArea>
        <CardContent>
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
            <Button
              sx={{ marginLeft: "10px" }}
              variant="outlined"
              startIcon={<StarBorderOutlinedIcon />}
            >
              MainCv
            </Button>
          </Box>
        </CardContent>
      </Card>
      <CvModal Open={open} Close={handleClose} CvNumber="1"></CvModal>
    </>
  );
}

export default Cvcard;
