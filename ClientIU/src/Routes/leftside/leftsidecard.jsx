import {
  Container,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  Paper,
  Grow,
  Collapse,
  Button,
} from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import "./styleleft.scss";
import { Box } from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { Link } from "react-router-dom";
import MenuLeftStudent from "../../components/Student/MenuLeftStudent";
import MenuLeftTeacher from "../../components/Teacher/MenuLeftTeacher";
import { useSelector, useDispatch } from 'react-redux'
import { Selector } from "../../redux/userSlice";
function Leftsidecard() {
  const [checked, setChecked] = React.useState(false);
  const [display, setDisplay] = React.useState(true);
  //set role display
  const role = useSelector(Selector)
  const [storeState, SetStoreState] = React.useState();
  const [isStudent, SetIsStudent] = React.useState(true);
  const [isTeacher, SetIsTeacher] = React.useState(false);
  const CheckRoleUser = (role) => {
    if (role === "student") {
      SetIsStudent(true);
      SetIsTeacher(false);
      console.log("displayStudent");
    } else if (role === "teacher") {
      SetIsStudent(false);
      SetIsTeacher(true);
      console.log("display Teacher");
    } 
    // else if (role === "instructor") {
    //   SetIsStudent(false);
    //   SetIsTeacher(false);
    //   console.log("display Instructor");
    // }
  };

  React.useEffect(() => {
    console.log(role)
    // SetStoreState(role);
    CheckRoleUser(role);
  }, [role]);

  const DisplayBtn = () => {
    setChecked((prev) => !prev);
  };
  const HandleDisplay = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <Collapse orientation="horizontal" in={!display}>
        <Button
          variant="outlined"
          sx={{
            position: { xs: "relative", md: "fixed" },
            marginLeft: "-10px",
            marginTop: "40px",
            transform: "rotate(90deg)",
          }}
          startIcon={
            <ExpandCircleDownOutlinedIcon
              sx={{ transform: "rotate(180deg)" }}
            />
          }
          onClick={HandleDisplay}
        >
          show
        </Button>
      </Collapse>
      <Collapse in={display}>
        <Box
          className="boxleft"
          onMouseEnter={DisplayBtn}
          onMouseLeave={DisplayBtn}
          sx={{
            position: { xs: "relative", md: "fixed" },
            borderStyle: "groove",
            border: "2px whitesmoke solid",
            boxShadow: "8",
            marginBottom: { xs: "30px" },
            backgroundColor: "white",
            height: "auto",
            width: "225px",
            display: { xs: "none", md: "flex" },
            zIndex: "6",
          }}
        >
          <Grow
            in={checked}
            sx={{
              position: "absolute",
              marginLeft: "190px",
              zIndex: "7",
            }}
          >
            <IconButton onClick={HandleDisplay}>
              <ExpandCircleDownOutlinedIcon
                sx={{ transform: "rotate(90deg)" }}
              ></ExpandCircleDownOutlinedIcon>
            </IconButton>
          </Grow>
          <Container>
            <Paper
              sx={{
                display: "flex",
                height: "70px",
                borderStyle: "groove",
                border: "2px whitesmoke solid",
                borderTopLeftRadius: "17px 18px",
                borderTopRightRadius: "17px 18px",
                width: { md: "120%", xs: "106%" },
                marginLeft: "-20px",
                marginTop: "10px",
                backgroundImage: "url(/images/card-bg.svg)",
                backgroundSize: "cover",
              }}
              className="bgtag"
            ></Paper>
            <Avatar sx={{ width: 65, height: 65 }} className="avatar" src="" />
            <div className="Userinfor">
              <Link to="UserInformation">Name of user</Link>
              <a className="linktoaddphoto">addphoto</a>
              <p className="userdes">Comperter sciences</p>
            </div>
            <Container
              sx={{
                display: { xs: "none", md: "block" },
                width: "250px",
                marginLeft: "-40px",
              }}
            >
              <Divider />
              {isStudent && <MenuLeftStudent />}
              {isTeacher && <MenuLeftTeacher />}
            </Container>
          </Container>
        </Box>
      </Collapse>
    </>
  );
}

export default Leftsidecard;
