import React from "react";
import StudentCard from "../../components/Student/StudentCard";
import { Grid, Typography, Divider,LinearProgress,Box } from "@mui/material";
import Axios from "../../config/axiosConfig";
import {checkLogged} from "../../redux/userSlice"
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
function TeacherListStudents() {
  const dispatch = useDispatch();
  const [dataUser,setDataUser]= useState()
  const [isLoading, setIsLoading] = useState(true);
  const checkUserLogged=async()=>{
    if (localStorage.getItem("userData")){
      const data =await JSON.parse(localStorage.getItem("userData"))
      await Axios.post("/api/users/getUserData",{userId:data.userId}).then((res)=>{
      setDataUser(res.data.UserData.ListStudent)
      setIsLoading(false);
      })
    }
    else{
      try {
        const userData = await dispatch(checkLogged())
        await localStorage.setItem("userData",JSON.stringify(userData.payload.data))
        await Axios.post("/api/users/getUserData",{userId:userData.payload.data.userId}).then((res)=>{
          setDataUser(res.data.UserData.ListStudent)
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
  if (isLoading) {
    return <Box><LinearProgress>IsLoading...</LinearProgress> </Box>
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
        <b>Students List:</b>
      </Typography>
      <Divider></Divider>
      <Grid
        container
        sx={{
          marginLeft: "10px",
          width: "auto",
          height: "auto",
        }}
      >
        {/* {Array.from(Array(4)).map((_, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              marginTop: "20px",
            }}
            xs={10}
            md={5}
            xl={3}
            key={index}
          >
            <StudentCard></StudentCard>
          </Grid>
        ))} */}
        {dataUser.map((value, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              marginTop: "20px",
            }}
            xs={10}
            md={5}
            xl={3}
            key={index}
          >
            <StudentCard data={value}></StudentCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TeacherListStudents;
