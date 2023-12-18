import { Box, Container,Paper,Avatar, Typography, Divider, Step,
    StepLabel,
    Stepper,
    LinearProgress, } from "@mui/material";
  import React, { useState,useEffect } from "react";
  import { useDispatch } from "react-redux";
  import {checkLogged} from "../../../redux/userSlice"
  import Axios from "../../../config/axiosConfig";
  import { Email } from "@mui/icons-material";
  
  function TeacherUserinfor() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [dataUser,setDataUser]= useState()
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
    useEffect(()=>{
    checkUserLogged()
    },[])
    console.log(dataUser)
    const stylebox = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
    };
    const boxData ={
      display: "flex",
      flexDirection: "row",
    }
    const steps = [
      "Apply job",
      "register Job",
      "internship",
      "White report",
      "grading",
    ];
    if (isLoading) {
      return <Box><LinearProgress>IsLoading...</LinearProgress> </Box>
    }
    return (
      <>
        <Box>
          <Paper
            sx={{
              height: "150px",
              borderStyle: "groove",
              border: "2px whitesmoke solid",
              borderRadius: "10px",
              width: "auto",
              backgroundImage: "Url(../../../public/images/card-bg.svg)",
              backgroundSize: "cover",
            }}
          ></Paper>
          <Avatar
            sx={{
              width: 130,
              height: 130,
              marginLeft: "80px",
              marginTop: "-90px",
            }}
            src={ dataUser.AvatarImage}
          />
          <Container>
          <Box sx={boxData}>
  
  
          {/* Box display info of user */}
          <Box sx={{
            marginTop:"30px"
          }}>
          <Typography variant="h6">{dataUser.name}</Typography>
            <Box sx={stylebox}>
              <Typography sx={{fontWeight: 'bold'}}>Department: </Typography>
              <Typography sx={{ ml: "20px" }}>
                {dataUser.Department}
              </Typography>
            </Box>
            {/* <Box sx={stylebox}>
              <Typography>Teacher:{}</Typography>
              <Typography sx={{ ml: "20px" }}>Teacher name</Typography>
            </Box> */}
  
            <Container>
              <Typography>Contact info:</Typography>
              <Container>
                <Typography>email:   {dataUser.email}</Typography>
                <Typography>Phone Number:   {dataUser.phone}</Typography>
              </Container>
            </Container>
          
          </Box>
          {/* Box display information of people relation */}
          </Box>
          {/* Box procession internship */}
        
          </Container>
        </Box>
      </>
    );
  }
  
  export default TeacherUserinfor;