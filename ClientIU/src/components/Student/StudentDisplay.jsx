import {
  Avatar,
  Box,
  Container,
  Divider,
  Step,
  Typography,
  Stepper,
  StepLabel,
  Button,
  CardActionArea,
} from "@mui/material";
import Cvcard from "../Cv/Cvcard";
import GradingStudent from "../Teacher/GradingStudent";
import { useSelector, useDispatch } from "react-redux";
import { Modal, CloseModal } from "../../redux/modalActionSlice";
import ModalAnnouncementToStudent from "../Teacher/ModalAnnounment";
import React, { useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../config/axiosConfig";

function StudentDisplay() {
  const steps = ["Apply", "register", "working", "report", "grading"];
  const styleText = { marginLeft: "20px", color: "#1976d2", marginTop: "20px" };
  const [verified,setVerified] = useState(false);
  const ismodalOpen = useSelector(Modal);
  const {StudentId} = useParams();
  const [student,setStudent]= useState()
  const [IsLoading,setIsLoading]= useState(true)

  const handleVerified = ()=>{
    setVerified((prev) => !prev);
  }
  const dispatch = useDispatch();
  

  const HandleModalClose = () => {
    dispatch(CloseModal(false));
  };

  useEffect(()=>{
    const getStudentData =async() =>{
      const data = await Axios.post("/api/student/getStudent",{StudentId:StudentId}).then((res)=>{
        setStudent(res.data.data)
        setIsLoading(false)
      })
    }
    getStudentData()
   },[])
  if(IsLoading){
    return(<h1>Loading...</h1>)
  }
  return (
    <>
      <GradingStudent Student={student}  Open={ismodalOpen.Grade} Close={HandleModalClose} />
      <ModalAnnouncementToStudent
        Open={ismodalOpen.Announce}
        Close={HandleModalClose}/>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <Avatar
            sx={{
              height: "100px",
              width: "100px",
            }}
          ></Avatar>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">{student.name}</Typography>
            <Typography variant="h4">ID: {" "}{student.StudentId}</Typography>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "100px",

          marginLeft: "10px",
          marginBottom: "10px",

          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography>Department: {" "}{student.Department}</Typography>
          <Typography> Job:{(!student.job) ? "Don't have Job":`${student.job.JobName}` } </Typography>
          <Box>
          {!verified && <Button variant="outlined" onClick={handleVerified} size="small">verified</Button> }
          {verified &&  <Button variant="contained" onClick={handleVerified} size="small">verified</Button>}

          {(!student.job)? <Box/>:  <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", xl: "row" },
              }}
            >
              <Typography>Company:</Typography>
              <Box
                sx={{
                  marginLeft: "10px",
                }}
              >
                <Typography>Name of Company:{student.job.Company}</Typography>
                <Typography>Address:{student.job.Address}</Typography>
                <Typography>Type of Company: {student.job.TypeofCompany}</Typography>
              </Box>
            </Box>}
        
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", xl: "row" },
              }}
            >
              <Typography>Instructor:</Typography>

              {(!student.instructor)? <Box><Typography>Do not have Instructor</Typography></Box> :  <Box
                sx={{
                  marginLeft: "10px",
                }}
              >
                <Typography>Name of Instructor:{student.instructor.name}</Typography>
                <Typography>Phone:{student.instructor.phone}</Typography>
                <Typography>Email:{student.instructor.email}e</Typography>
                <Typography>Position:{student.instructor.Position}e</Typography>
              </Box>}

            
            </Box>
          </Box>
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              color: "#1976d2",
            }}
          >
            Contract:
          </Typography>
          <Divider></Divider>
          <Typography> Email:{student.email}</Typography>
          <Typography>Phone Number:{student.phone}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={styleText}>
          StudentCV:
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderStyle: "groove",
              border: "2px whitesmoke solid",
              borderRadius: "20px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              width: "90%",
            }}
          >
            <Cvcard></Cvcard>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={styleText}>
          Report:
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderStyle: "groove",
              border: "2px whitesmoke solid",
              borderRadius: "20px",
              width: "90%",
              minHeight: "100px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1976d2",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              NO Report{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={styleText}>
          Progression:
        </Typography>
        <Stepper sx={{ width: "auto" }} activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}

export default StudentDisplay;
