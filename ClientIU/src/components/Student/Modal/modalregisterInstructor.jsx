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
            <Typography variant="h5"> Student id : </Typography>
          </Container>

          <Box
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
                  id="outlined-basic"
                  label="Name"
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
                      id="outlined-basic"
                      label="Phone"
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
                      id="outlined-basic"
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
                  id="outlined-basic"
                  label="Position"
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
                endIcon={<RestartAltOutlinedIcon></RestartAltOutlinedIcon>}
              >
                Reset
              </Button>
              <Button variant="contained" size="large">
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
