import React, { useMemo } from "react"

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import UpdateIcon from "@mui/icons-material/Update";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Divider,
  Paper,
  TextField,
} from "@mui/material";

function StudentModal({User}) {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        border: "2px solid whitesmoke",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
    };
    const textHolder ={
    display:'flex',
    flexDirection:'row',
    ml:'20px'
    }
    console.log(User)
    return (
        <Box sx={style}>
        <h3>
        Hello {User.StudentId}
        </h3>

        <Box
        sx={{
        display:'flex',
        flexDirection:'column'
        }}
        >
        <Box sx={{
    display:'flex',
    flexDirection:'row',
    ml:'20px'
}}>
        <Typography></Typography>
        </Box>  
        </Box>
    </Box>
    
    );
}


export default StudentModal;