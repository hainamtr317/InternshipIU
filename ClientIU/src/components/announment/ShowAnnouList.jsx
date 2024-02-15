import React, { useState, useEffect } from "react";
import { MenuItem } from "@mui/material";
import Axios from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { checkLogged } from "../../redux/userSlice";
import {
  Box,
  Container,
  Paper,
  Avatar,
  Typography,
  Divider,
  Step,
  StepLabel,
  Stepper,
  LinearProgress,
} from "@mui/material";
import AnnounceCard from "./announmentCard";

function ShowAnnounceList({ dataUser }) {
  console.log(dataUser);
  return (
    <>
      {dataUser.length > 0 ? (
        dataUser.map((e) => (
          <AnnounceCard key={e._id} announcement={e}></AnnounceCard>
        ))
      ) : (
        <MenuItem>Do not have announcement</MenuItem>
      )}
    </>
  );
}

export default ShowAnnounceList;
