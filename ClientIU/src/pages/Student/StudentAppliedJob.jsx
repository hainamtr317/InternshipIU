import { Container, Box, Typography, Divider,Grid,LinearProgress } from "@mui/material";
import JobCard from "../../components/Job/Jobcard";
import React, { useState,useEffect } from "react";
import { JobData } from "../../components/Job/Data/jobData";
import { useSelector, useDispatch } from "react-redux";
import { Modal, CloseModal } from "../../redux/modalActionSlice";
import ModalRegisterInstructor from "../../components/Student/Modal/modalregisterInstructor";
import ModalRegisterJob from "../../components/Student/Modal/modalregisterJob";
import Axios from "../../config/axiosConfig";
import { checkLogged } from "../../redux/userSlice";

function StudentAppliedJob() {
  const ismodalOpen = useSelector(Modal);
  const dispatch = useDispatch();
  console.log(ismodalOpen);
  const HandleModalClose = () => {
    dispatch(CloseModal(false));
  };
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser,setDataUser]= useState()

  useEffect(()=>{
    const checkUserLogged=async()=>{
      if (localStorage.getItem("userData")){
        const data =await JSON.parse(localStorage.getItem("userData"))
        await Axios.post("/api/users/getUserData",{userId:data.userId}).then((res)=>{
        setDataUser(res.data.UserData)
        setIsLoading(false);
        })
      }
      else{
        try {
          const userData = await dispatch(checkLogged())
          await localStorage.setItem("userData",JSON.stringify(userData.payload.data))
          await Axios.post("/api/users/getUserData",{userId:userData.payload.data.userId}).then((res)=>{
            setDataUser(res.data.UserData)
            setIsLoading(false);
          })
        } catch (error) {
          return console.log(error)
        }
      }
    }
    checkUserLogged()
    console.log(dataUser)
   },[])
  if (isLoading) {
    return <Box><LinearProgress>IsLoading...</LinearProgress> </Box>
  }
  return (
    <>
      <ModalRegisterInstructor
        userData={dataUser}
        Open={ismodalOpen.Grade}
        Close={HandleModalClose}
      />
      <ModalRegisterJob
        userData={dataUser}
        Open={ismodalOpen.Announce}
        Close={HandleModalClose}
      ></ModalRegisterJob>
      <Box>
        <Typography
          sx={{
            marginLeft: "20px",
            color: "#1976d2",
            marginTop: "20px",
          }}
          variant="h3"
        >
          <b>List of Job Applied</b>
        </Typography>
        <Divider></Divider>

        <Grid
          container
          sx={{
            marginLeft: "20px",
            width: "auto",
          }}
        >
          {dataUser.JobsApplied.length>0 && dataUser.JobsApplied.map((job) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={11}
              md={6}
              xl={4}
              key={job.id}
            >
              <JobCard Job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default StudentAppliedJob;
