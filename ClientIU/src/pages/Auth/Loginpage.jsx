import {
  Box,
  Avatar,
  Typography,
  Checkbox,
  Button,
  FormControlLabel,
  TextField,
  Link,
  Grid,
} from "@mui/material";
import "./login.scss";

import * as React from "react";

import logo from "../../assets/logo-small_logo.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Navigate, useNavigate } from "react-router-dom";
import store from "../../redux/store";

//set role display

function Loginpage() {
  const navigate = useNavigate();
  const [isInstructor, setIsInstructor] = React.useState(false);
  const [storeState, SetStoreState] = React.useState();
  const [isStudent, SetIsStudent] = React.useState(true);
  const [isTeacher, SetIsTeacher] = React.useState(false);
  const CheckRoleUser = (role) => {
    if (role === "student") {
      SetIsStudent(true);
      SetIsTeacher(false);
      setIsInstructor(false);
      console.log("displayStudent");
    } else if (role === "teacher") {
      SetIsStudent(false);
      SetIsTeacher(true);
      setIsInstructor(false);
      console.log("display Teacher");
    } else if (role === "instructor") {
      SetIsStudent(false);
      SetIsTeacher(false);
      setIsInstructor(true);
      console.log("display Instructor");
    }
  };

  React.useEffect(() => {
    SetStoreState(store.getState().User.role);
    // console.log(storeState);
    CheckRoleUser(storeState);
  }, [storeState]);
  // const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    {
      isStudent && navigate("/Student");
    }
    {
      isTeacher && navigate("/Teacher");
    }
  };

  return (
    <div className="main-login">
      <div className="logo-header">
        <a className="logo" href="/login">
          <img className="logo-img" src={logo} alt="" />
          <div className="logo-text">
            <span className="logo-text-top">
              <b>Vietnam National University HCMC</b>
            </span>
            <span className="logo-text-bottom">
              <b>International University</b>
            </span>
          </div>
        </a>
      </div>
      {/* add box container for login */}
      <div className="box-contain">
        <Box
          sx={{
            display: "flex",
            width: { xs: 500, md: 1000 },
            height: 600,
            backgroundColor: "white",
            border: "2px solid whitesmoke",
            borderRadius: "3%",
          }}
        >
          <Box
            sx={{
              marginLeft: 22,
              marginTop: "8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default Loginpage;
