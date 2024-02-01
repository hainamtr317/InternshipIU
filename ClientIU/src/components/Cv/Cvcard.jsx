import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";

import CvModal from "./Cvmodal";
import Axios from "../../config/axiosConfig";

function Cvcard({ CvData, StudentId, isStudent }) {
  const [isMain] = useState(false);
  const isCheck = CvData.MainCv;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this Cv")) {
      await Axios.post("/api/student/DeleteStudentCv", {
        studentId: StudentId,
        CvId: CvData._id,
      })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.msg);
            location.reload();
          } else [alert(res.data.error)];
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      return true;
    }
  };
  const handleClickMain = async () => {
    if (confirm("Are you sure you want to change Main Cv")) {
      await Axios.post("/api/student/SetMainCv", {
        studentId: StudentId,
        CvId: CvData._id,
      }).then((res) => {
        if (res.data.success) {
          alert(res.data.msg);
          location.reload();
        } else [alert(res.data.error)];
      });
    } else {
      return true;
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        className="Cvcard"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 290,
          width: 400,
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          boxShadow: "8",
          overflow: "hidden",
          margin: "5px 5px 5px 0px",
        }}
      >
        <CardActionArea
          sx={{
            flexGrow: "3",
          }}
          onClick={handleOpen}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <object
              class="mt-5 mb-5 overflow-hidden pointer-events-none"
              data={CvData.LinkCv}
              align="middle"
              width="80%"
              height="80%"
            ></object>
          </Box>
        </CardActionArea>
        <CardContent
          sx={{
            flexGrow: "1",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              width: "150px",
              marginTop: "10px",
              overflowWrap: "break-word",
            }}
          >
            {CvData.NameCV}
          </Typography>
          {isStudent && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "170px",
                marginTop: "-45px",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
              {isCheck && (
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  onClick={handleClickMain}
                >
                  MainCv
                </Button>
              )}
              {!isCheck && (
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="outlined"
                  onClick={handleClickMain}
                >
                  MainCv
                </Button>
              )}
            </Box>
          )}
        </CardContent>
      </Card>
      <CvModal
        Open={open}
        Close={handleClose}
        dataFiles={CvData.LinkCv}
      ></CvModal>
    </>
  );
}

export default Cvcard;
