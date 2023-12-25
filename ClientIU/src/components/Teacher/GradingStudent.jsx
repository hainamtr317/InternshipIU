import {
  Box,
  Divider,
  Typography,
  TextField,
  Button,
  Container,
  Modal,
  InputLabel
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import React from "react";
import Axios from "../../config/axiosConfig";



function GradingStudent(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "auto",
    bgcolor: "white",
    border: "2px solid whitesmoke",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

const GradingHandle=async (e)=>{
  e.preventDefault();
  var Grade = e.target.elements.grade.value
  var Comment = e.target.elements.comment.value
  const dataGrading = ({  
      grade:{
        Grade:Grade,
        Comment:Comment
      }
  })
  console.log(dataGrading)
  try {
    const user =await JSON.parse(localStorage.getItem("userData"))
    await Axios.put("/api/teacher/grading",{StudentId:props.Student.StudentId,data:dataGrading}).then(async(res)=>{
      if(res.data.success){
        await Axios.post("/api/teacher/saveStudent",{userId:user.userId}).then(async(res)=>{
          if(res.data.success){
            alert("Success grading for Student",props.Student.StudentId)
          }
        })
      }
      else{
        alert("have error grading for Student:",res.data.error)
      }
      })
  } catch (error) {
    console.log(error)
    alert("have error grading for Student:",error)
  }

}

  return (
    <>
      <Modal open={props.Open} onClose={props.Close}>
        <Box sx={style}>
          <Typography
            sx={{
              marginLeft: "20px",
              color: "#1976d2",
              marginTop: "20px",
            }}
            variant="h3"
          >
            <b>Grading</b>
          </Typography>
          <Divider></Divider>
          <Container>
            <Typography variant="h5"> Student id : {props.Student.StudentId} </Typography>
          </Container>
          <Box
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
            className="StudentReport"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1976d2",
              }}
            >
              Student Report:
            </Typography>
            <Divider></Divider>
            Here to display Student Report
          </Box>
          <Box
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
            className="gradingForm "
          >
            <Box
            component="form"
            onSubmit={(e)=>{GradingHandle(e)}}
            sx={{
            justifyContent:'center',
            alignItems:'center'
            }}
            className="Grading "
            >
            <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputLabel>
                  <Typography variant="h6">Grade: </Typography>
                </InputLabel>
                <TextField
                  sx={{ ml: "20px", width: "300px" }}
                  type="number"
                  id="grade"
                  required
                  label="Grade "
                  variant="outlined"
                  name="grade"
                  autoComplete="Grade"
                  autoFocus
                />
              </Box>
              <InputLabel>
                  <Typography variant="h6">Comment: </Typography>
              </InputLabel>
            <TextareaAutosize  
              style={{ width: '400px' }}
              minRows={4}
              id="comment"
              required
              label="Comment "
              variant="outlined"
              name="comment"
              autoComplete="comment"
              autoFocus
            />
            <Box
              sx={{
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                size="large"
                type="reset"
                endIcon={<RestartAltOutlinedIcon></RestartAltOutlinedIcon>}
              >
                Reset
              </Button>
              <Button variant="contained" size="large" type="submit">
                Grading
              </Button>
            </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default GradingStudent;
