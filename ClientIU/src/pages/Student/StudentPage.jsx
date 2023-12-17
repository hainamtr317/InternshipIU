import * as React from "react";
import Header from "../../components/header/Header";
import Leftside from "../../Routes/leftside/leftside";
import MainLayout from "../../Routes/mainlayout/mainlayout.jsx";
import { Box, Grid } from "@mui/material";
import Rightside from "../../Routes/rightside/rightside";
import ChatTab from "../../components/chattab/chattab";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Selector, UserInfo, changeRole, login, register,checkLogged } from "../../redux/userSlice.js"
import { useState } from "react";

const StudentPage = () => {
  const dispatch = useDispatch();
  const [dataUser,setDataUser]= useState()
  const checkUserLogged=async()=>{
    console.log(!localStorage.getItem("userData"))
    if (localStorage.getItem("userData")){
      await setDataUser(JSON.parse(localStorage.getItem("userData")))
    }
    else{
      try {
        const userData = await dispatch(checkLogged())
        await localStorage.setItem("userData",JSON.stringify(userData.payload.data))
        setDataUser(userData.payload.data)
      } catch (error) {
        return console.log(error)
      }
    }
  }
  useEffect(()=>{
  checkUserLogged()
  },[])
  return (
    <Box sx={{ padding: "0", margin: "0", height: "950px" }}>
      <Header />

      <Grid container  className="main" sx={{ marginTop: "120px" }}>
        <Grid sm>
          <Leftside userData={dataUser} />
        </Grid>
        <Grid sm={8}>
          <MainLayout />
        </Grid>
        <Grid sm>
          <Rightside />
        </Grid>
      </Grid>
      <ChatTab />
    </Box>
  );
};
export default StudentPage;
