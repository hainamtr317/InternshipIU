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

import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import React from "react";
import Axios from "../../../config/axiosConfig";
function ModalRegisterInstructor(props) {
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
  const registerHandle = async (e) => {
    e.preventDefault();
    var insName = e.target.elements.NameIns.value;
    var phoneIns = e.target.elements.phone.value;
    var emailIns = e.target.elements.Email.value;
    var positionIns = e.target.elements.Position.value;
    const dataRegister = {
      instructor: {
        name: insName,
        phone: phoneIns,
        email: emailIns,
        Position: positionIns,
      },
    };
    console.log({
      userId: JSON.parse(localStorage.getItem("userData")).userId,
      data: dataRegister,
    });
    try {
      const user = await JSON.parse(localStorage.getItem("userData"));
      await Axios.put("/api/student/StudentRegister", {
        userId: user.userId,
        data: dataRegister,
      }).then(async (res) => {
        if (res.data.success) {
          alert("Success resister instructor for", props.userData.name);
          navigate("/student/ListJobApplied");
        } else {
          alert(
            "have error for resister instructor that error:",
            res.data.error.toString()
          );
        }
      });
    } catch (error) {
      console.log(error);
      alert("have error for resister instructor that error:", error);
    }
  };

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
            <b>Register Instructor</b>
          </Typography>
          <Divider></Divider>
          <Container>
            <Typography variant="h5">
              {" "}
              Student id : {props.userData.StudentId}
            </Typography>
          </Container>

          <Box
            component="form"
            onSubmit={(e) => {
              registerHandle(e);
            }}
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
                  <Typography variant="h6">Name of the Instructor:</Typography>
                </InputLabel>
                <TextField
                  sx={{ ml: "20px", width: "300px" }}
                  id="NameIns"
                  label="Name"
                  name="NameIns"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <InputLabel>
                  <Typography variant="h6">Contract:</Typography>
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
                    <Typography variant="h6">Phone:</Typography>
                    <TextField
                      sx={{ ml: "10px", width: "300px" }}
                      id="phone"
                      label="Phone"
                      name="phone"
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
                    <Typography variant="h6">Email:</Typography>
                    <TextField
                      sx={{ ml: "17px", width: "300px" }}
                      id="Email"
                      name="Email"
                      label="Email"
                      variant="outlined"
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
                <InputLabel>
                  <Typography variant="h6">Position:</Typography>
                </InputLabel>
                <TextField
                  sx={{ ml: "20px", width: "300px" }}
                  id="Position"
                  label="Position"
                  name="Position"
                  variant="outlined"
                />
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

export default ModalRegisterInstructor;
