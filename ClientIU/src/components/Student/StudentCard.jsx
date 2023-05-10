import {
  Avatar,
  Card,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

function StudentCard() {
  const steps = ["Apply", "register", "working", "report", "grading"];
  const handleStudentcards = () => {
    // <Link to="StudentId:"></Link>;
  };
  return (
    <>
      <Card
        className="studentCard"
        sx={{
          height: 350,
          width: 250,
          borderStyle: "groove",
          border: "2px whitesmoke solid",
          borderRadius: "20px",
          boxShadow: "8",
          background:
            "linear-gradient(191deg, rgba(88,54,189,1) 19%, rgba(25,118,210,1) 57%, rgba(180,201,223,1) 100%)",
          overflow: "hidden",
        }}
      >
        <Link to="StudentId">
          <CardActionArea onClick={handleStudentcards}>
            <Box sx={{ marginLeft: "5px", marginTop: "5px" }}>
              <img src="/logo-favicon-50x50.png" alt="" />
            </Box>
            <Container
              sx={{
                width: "100%",
                marginTop: "-20px",
              }}
            >
              <center>
                <Avatar
                  sx={{
                    height: "100px",
                    width: "100px",
                  }}
                ></Avatar>
              </center>
              <Box
                sx={{
                  marginTop: "40px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Student Name:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  ID:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Department:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Job:
                </Typography>
              </Box>
            </Container>
            <Box sx={{ width: "auto", marginTop: "10px" }}>
              <Stepper
                sx={{ width: "auto", zoom: "0.8" }}
                activeStep={0}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography variant="small" sx={{ color: "white" }}>
                        {label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}

export default StudentCard;
