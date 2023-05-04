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
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";

function Leftsidecard() {
  const [checked, setChecked] = React.useState(false);
  const [display, setDisplay] = React.useState(true);
  const ListMenu = (
    <MenuList>
      <MenuItem>
        <Link to="MyCv">
          <p>Recruitment Cv</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="ListJobApplied">
          <p>ListJobApplied</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="Report">
          <p>Report forms</p>
        </Link>
      </MenuItem>
    </MenuList>
  );
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
            marginLeft:"-10px",
            marginTop:"40px",
            transform: "rotate(90deg)" }}
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
            // , height: { md: 'auto', xs: '250px' }
            // , width: { md: '225px', xs: '448px' }
            // , display: { xs: 'flex', md: 'flex' }
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
              {ListMenu}
            </Container>
            {/* <Accordion
          sx={{
            display: { xs: "flex", md: "none" },
            position: "relative",
            marginTop: "0px",
            border: "1px solid whitesmoke",
            borderRadius: "5%",
            height: "auto",
            zIndex: "1",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
          >
          <AccordionSummary
          sx={{
            width: "40%",
            height: "40px",
            justifySelf: "center",
            alignSelf: "center",
            marginLeft: "10px",
          }}
          expandIcon={<ExpandMoreIcon />}
          >
          Show more
          </AccordionSummary>
          <AccordionDetails sx={{ height: "auto" }}>
          {ListMenu}
          </AccordionDetails>
        </Accordion> */}
          </Container>
        </Box>
      </Collapse>
    </>
  );
}

export default Leftsidecard;
