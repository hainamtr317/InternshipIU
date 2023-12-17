import {
  Box,
  Divider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Container,
  Modal,
  InputLabel,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import React from "react";
import Axios from "../../../config/axiosConfig";
function ModalRegisterJob(props) {
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
  const registerHandle= async (e)=>{
    e.preventDefault();
    var nameJob = e.target.elements.JobName.value
    var nameCompany = e.target.elements.CompanyName.value
    var Address = e.target.elements.Address.value
    var TypeOfCompany = e.target.elements.TypeCompany.value
    const dataRegister = ({
        job:{
        JobName:nameJob,
        Address:Address,
        Company:nameCompany,
        TypeofCompany:TypeOfCompany
      }
    })
      console.log({userId:JSON.parse(localStorage.getItem("userData")).userId,data:dataRegister})
      try {
        const user =await JSON.parse(localStorage.getItem("userData"))
        await Axios.put("/api/student",{userId:user.userId,data:dataRegister}).then(async(res)=>{
          if(res.data.success){
            alert("Success resister Job for",props.userData.name)
            await Axios.post("api/student/saveStudent",{userId:user.userId}).then((res)=>{
              if(res.data.success){
                navigate('/student/ListJobApplied');
              }
            })
          }
          else{
            alert("have error for resister Job that error:",res.data.error)
          }
          })
      } catch (error) {
        console.log(error)
        alert("have error for resister Job that error:",error)
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
            <b>Register Job</b>
          </Typography>
          <Divider></Divider>
          <Container>
            <Typography variant="h5"> Student id : {props.userData.StudentId} </Typography>
          </Container>

          <Box
            component="form"
            onSubmit={(e)=>{registerHandle(e)}}
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
            className="registerForm "
          >
            <Container>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputLabel>
                  <Typography variant="h6">Job Name : </Typography>
                </InputLabel>
                <TextField
                  sx={{ ml: "20px", width: "300px" }}
                  id="JobName"
                  required
                  label="Job Name"
                  variant="outlined"
                  name="JobName"
                  autoComplete="JobName"
                  autoFocus
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <InputLabel>
                  <Typography variant="h6">Company:</Typography>
                </InputLabel>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">Company Name:</Typography>
                    <TextField
                      sx={{ ml: "20px", width: "300px" }}
                      id="CompanyName"
                      required
                      label="Company Name"
                      variant="outlined"
                      name="CompanyName"
                      autoComplete="CompanyName"
                      autoFocus
                    />
                  </InputLabel>
                  <InputLabel
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">Address:</Typography>
                    <TextField
                      sx={{ ml: "90px", width: "300px" }}
                      id="Address"
                      name="Address"
                      label="Address"
                      variant="outlined"
                    />
                  </InputLabel>
                  <InputLabel
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">Type of Company :</Typography>
                    <TextField
                      sx={{ ml: "0px", width: "300px" }}
                      id="TypeCompany"
                      required
                      label="Company Type"
                      variant="outlined"
                      name="TypeCompany"
                      autoComplete="TypeCompany"
                      autoFocus
                    />
                  </InputLabel>
                </Container>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                }}
              >
              </Box>
            </Container>
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
                Register Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ModalRegisterJob;
