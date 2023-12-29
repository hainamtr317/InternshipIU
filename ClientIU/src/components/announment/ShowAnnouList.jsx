import React, { useState,useEffect } from "react";
import { MenuItem } from "@mui/material";
import Axios from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { checkLogged } from "../../redux/userSlice";
import { Box, Container,Paper,Avatar, Typography, Divider, Step,
  StepLabel,
  Stepper,
  LinearProgress, } from "@mui/material";
import AnnounceCard from "./announmentCard";

function ShowAnnounceList({dataUser}) {
    return (  <>

      {dataUser.length > 1 ?
      <MenuItem>
      Do not have announcement
      </MenuItem> : 
        dataUser.map((e,index)=>(
        <AnnounceCard announcement={e}></AnnounceCard>
        ))}
        {/* {Array.from(Array(17)).map((_, index) => (
          <MenuItem>
          This is an announcement {index+1}
          </MenuItem>
        ))} */}
    
    </>);
}

export default ShowAnnounceList;