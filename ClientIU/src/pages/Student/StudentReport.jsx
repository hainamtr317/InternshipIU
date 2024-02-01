import {
  Divider,
  Typography,
  Input,
  Container,
  Box,
  Grid,
  LinearProgress,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import FileUploadReport from "../../components/Fileupload/FileuploadReport";
import ReportCard from "../../components/Report/ReportCard";
import { useDispatch } from "react-redux";
import { checkLogged } from "../../redux/userSlice";
import React, { useState, useEffect } from "react";
import CvModal from "../../components/Cv/Cvmodal";
import Axios from "../../config/axiosConfig";
function StudentReport() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpenReport = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const checkUserLogged = async () => {
    if (localStorage.getItem("userData")) {
      const data = await JSON.parse(localStorage.getItem("userData"));
      await Axios.post("/api/users/getUserData", { userId: data.userId }).then(
        (res) => {
          setDataUser(res.data.UserData);
          setIsLoading(false);
        }
      );
    } else {
      try {
        const userData = await dispatch(checkLogged());
        await localStorage.setItem(
          "userData",
          JSON.stringify(userData.payload.data)
        );
        await Axios.post("/api/users/getUserData", {
          userId: userData.payload.data.userId,
        }).then((res) => {
          setDataUser(res.data.UserData);
          setIsLoading(false);
        });
      } catch (error) {
        return console.log(error);
      }
    }
  };
  useEffect(() => {
    checkUserLogged();
    console.log(dataUser);
  }, []);

  if (isLoading) {
    return (
      <Box>
        <LinearProgress>IsLoading...</LinearProgress>{" "}
      </Box>
    );
  }
  return (
    <>
      <Typography
        sx={{
          color: "#1976d2",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        variant="h3"
      >
        <b>Report</b>
      </Typography>
      <Divider></Divider>
      <Container>
        <Typography
          variant="h5"
          sx={{
            color: "#1976d2",
          }}
        >
          Your Report:
        </Typography>
        <Divider></Divider>
        <Container>
          <FileUploadReport StudentId={dataUser._id}></FileUploadReport>
          <Box sx={{ mt: "50px" }}>
            {dataUser.report == "" ? (
              <>
                <Typography variant="h3"> don't have report</Typography>
              </>
            ) : (
              <>
                <Card
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
                  <CardActionArea onClick={handleOpenReport}>
                    <CardMedia
                      component="object"
                      class="mt-8 mb-5 ml-5 overflow-hidden"
                      data={dataUser.report}
                      height="90%"
                      width="90%"
                    ></CardMedia>
                  </CardActionArea>
                </Card>
              </>
            )}
          </Box>
        </Container>
      </Container>
      <Divider></Divider>
      <Container>
        <Typography
          variant="h5"
          sx={{
            color: "#1976d2",
          }}
        >
          Report from:
        </Typography>
        <Divider></Divider>
        <Box>
          <Grid
            container
            sx={{
              marginLeft: "10px",
              width: "auto",
            }}
          >
            {Array.from(Array(3)).map((_, index) => (
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
                xs={12}
                md={6}
                xl={4}
                key={index}
              >
                <ReportCard></ReportCard>
              </Grid>
            ))}
          </Grid>
        </Box>
        <CvModal
          Open={open}
          Close={handleClose}
          dataFiles={dataUser.report}
        ></CvModal>
      </Container>
    </>
  );
}

export default StudentReport;
