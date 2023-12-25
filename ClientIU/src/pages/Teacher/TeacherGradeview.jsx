import { Box, Divider, Typography, Button,LinearProgress } from "@mui/material";
import React from "react";
import GridDataGradeTeacher from "../../components/Grade/GriddataGradeTeacher";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Axios from "../../config/axiosConfig";
import {checkLogged} from "../../redux/userSlice"
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
function TeacherGradeView() {
  const dispatch = useDispatch();
  const [dataUser,setDataUser]= useState()
  const [isLoading, setIsLoading] = useState(true);
  const [rows,setRows]= useState()
  const steps = [
    "Apply job",
    "register Job",
    "internship",
    "White report",
    "grading",
  ];
  const getRow=(data)=>{
    let newRow = []
    data.map((e)=>{
      console.log(e)
      const setdata = {
        id: e.StudentId,
        studentName: e.name,
        email: e.email,
        phoneNumber: e.phone,
        Report: (!e.report) ? "Don't have":`${e.report}`,
        status: (!e.progressionStatus) ? "have err":`${steps[e.progressionStatus-1]}`,
        gradeComment: (!e.grade) ? "Don't have Grade comment":`${e.grade.Comment}`,
        grade: (!e.grade) ? "Don't have grade":`${e.grade.Grade}`,
      }
      newRow.push(setdata)
    })
    return newRow
  }  
  const checkUserLogged=async()=>{
    if (localStorage.getItem("userData")){
      const data =await JSON.parse(localStorage.getItem("userData"))
      await Axios.post("/api/users/getUserData",{userId:data.userId}).then(async(res)=>{
      // setDataUser(res.data.UserData.ListStudent)
      const rowData = [
        // {
        //   id: "ITITIU19171",
        //   studentName: "Trần Hải Nam",
        //   email: "hainamtr317@gmail.com",
        //   phoneNumber: 917417799,
        //   Report: "Don't have",
        //   status: "apply job",
        //   gradeComment: "not grading",
        //   grade: "not grading",
        // }
      ]
      await setRows(rowData.concat(getRow(res.data.UserData.ListStudent)))
      await setIsLoading(false);
      })
    }
    else{
      try {
        const userData = await dispatch(checkLogged())
        await localStorage.setItem("userData",JSON.stringify(userData.payload.data))
        await Axios.post("/api/users/getUserData",{userId:userData.payload.data.userId}).then(async(res)=>{
          const rowData = [
            {
              id: "ITITIU19171",
              studentName: "Trần Hải Nam",
              email: "hainamtr317@gmail.com",
              phoneNumber: 917417799,
              Instructor: "Don't Have",
              Report: "Don't have",
              status: "apply job",
              date: "not grading",
              Fngrade: "not grading",
            }
          ]
          await setRows(rowData.concat(getRow(res.data.UserData.ListStudent)))
          await setIsLoading(false);
        })
      } catch (error) {
        return console.log(error)
      }
    }
  }
  useEffect(()=>{
  checkUserLogged()
  },[])



  if (isLoading) {
    return <Box><LinearProgress>IsLoading...</LinearProgress> </Box>
  }
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{
              color: "#1976d2",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            variant="h3"
          >
            <b>Grade Table:</b>
          </Typography>
          <Box
            sx={{
              ml: "700px",
            }}
          >
            <Button variant="outlined" startIcon={<SaveAsOutlinedIcon />}>
              Save
            </Button>
            <Button variant="outlined" startIcon={<ExitToAppOutlinedIcon />}>
              Export
            </Button>
          </Box>
        </Box>
        <Divider></Divider>
        <Box sx={{ width: "100%", height: 650 }}>
          <GridDataGradeTeacher rowData={rows}></GridDataGradeTeacher>
        </Box>
      </Box>
    </>
  );
}

export default TeacherGradeView;
