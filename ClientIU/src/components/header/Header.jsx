import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import ShowAnnounceList from "../announment/ShowAnnouList";
import HeaderStudent from "../Student/HeaderStudent";
import HeaderTeacher from "../Teacher/HeaderTeacher";
import { useSelector, useDispatch } from "react-redux";
import { Selector, reset } from "../../redux/userSlice";
import Axios from "../../config/axiosConfig";
import {
  GetStudentsList,
  student,
  filterStudents,
} from "../../redux/StudentSlice";
import { Jobs, Company, fillerJobs, getJobsList } from "../../redux/jobsSlice";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: 40,

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: "absolute",
  pointerEvents: "none",
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function Header() {
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [AnnounceAnchorEl, SetAnnounceAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isAnnounceMenuOpen = Boolean(AnnounceAnchorEl);

  const dispatch = useDispatch();
  //set role display
  const role = useSelector(Selector);
  const StudentList = useSelector(student);
  const jobsList = useSelector(Jobs);
  const [storeState, SetStoreState] = React.useState();
  const [isStudent, SetIsStudent] = React.useState(true);
  const [isTeacher, SetIsTeacher] = React.useState(false);
  const [isAdmin, SetIsAdmin] = React.useState(false);
  const [isCompanyLogin, SetIsCompanyLogin] = React.useState(false);

  // const [isLoading, setIsLoading] = useState(true);
  const [announceData, SetAnnounceData] = React.useState([]);
  const [announceNotRead, SetAnnounceNotRead] = React.useState([]);
  const CheckRoleUser = (role) => {
    if (role === "student") {
      SetIsStudent(true);
      SetIsTeacher(false);
      SetIsCompanyLogin(false);
      SetIsAdmin(false);
      console.log("displayStudent");
    } else if (role === "teacher") {
      SetIsStudent(false);
      SetIsTeacher(true);
      SetIsCompanyLogin(false);
      SetIsAdmin(false);
      console.log("display Teacher");
    } else if (role === "admin") {
      SetIsStudent(false);
      SetIsTeacher(false);
      SetIsCompanyLogin(false);
      SetIsAdmin(true);
      console.log("display Admin");
    } else if (role === "company") {
      SetIsStudent(false);
      SetIsTeacher(false);
      SetIsAdmin(false);
      SetIsCompanyLogin(true);
    }
  };
  const getRole = async () => {
    const data = await JSON.parse(localStorage.getItem("userData"));
    CheckRoleUser(data.userRole);
    await Axios.post("/api/users/Announce", { userId: data.userId }).then(
      async (res) => {
        await SetAnnounceData(res.data.data);
        await SetAnnounceNotRead(
          res.data.data.filter((e) => e.ReadStatus == false)
        );
      }
    );
  };
  const [inputValue, setInputValue] = React.useState("");
  React.useEffect(() => {
    const delayInputTimeoutId = setTimeout(async () => {
      if (isStudent) {
        if (!inputValue) return dispatch(getJobsList());
        const searchAction = await jobsList.filter(
          (job) =>
            job.nameJob.toLowerCase().includes(inputValue.toLowerCase()) ||
            job.company.toLowerCase().includes(inputValue.toLowerCase())
        );
        dispatch(fillerJobs(searchAction));
      } else if (isTeacher) {
        if (!inputValue) return dispatch(GetStudentsList());
        const searchAction = await StudentList.filter(
          (student) =>
            student.StudentId.toLowerCase().includes(
              inputValue.toLowerCase()
            ) || student.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        dispatch(filterStudents(searchAction));
      }
    }, 600);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 600]);
  const HandleSearch = async (e) => {
    setInputValue(e.target.value);
  };
  React.useEffect(() => {
    getRole();
  }, []);
  // set function navigate
  const navigation = useNavigate();
  // function to set action of menu is open or not
  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //handle Announce
  const handleAnnounceMenuOpen = (event) => {
    setMobileMoreAnchorEl(null);
    SetAnnounceAnchorEl(event.currentTarget);
  };
  const handleAnnounceMenuClose = () => {
    SetAnnounceAnchorEl(null);
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogout = async () => {
    if (isCompanyLogin) {
      await localStorage.clear();
      navigation("/");
    } else {
      await dispatch(reset());
      await Axios.post("/api/users/logout", {
        userId: JSON.parse(localStorage.getItem("userData")).userId,
      }).then((res) => {
        if (res.data.success) {
          localStorage.clear();
          navigation("/");
        } else {
          alert("have error");
        }
      });
    }
    await dispatch(reset());
    await Axios.post("/api/users/logout", {
      userId: JSON.parse(localStorage.getItem("userData")).userId,
    }).then((res) => {
      if (res.data.success) {
        localStorage.clear();
        navigation("/");
      } else {
        alert("have error");
      }
    });
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const renderAlertMenu = (
    <Menu
      anchorEl={AnnounceAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id="Alert"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isAnnounceMenuOpen}
      onClose={handleAnnounceMenuClose}
    >
      <ShowAnnounceList dataUser={announceData}></ShowAnnounceList>
    </Menu>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  //display mobile menu
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleAnnounceMenuOpen}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={announceNotRead.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {/* display follow user role */}
      {isStudent && <HeaderStudent />}
      {isTeacher && <HeaderTeacher />}

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const navigate = useNavigate();

  const HandleClickbtn = (e) => {
    {
      isStudent && navigate("/Student");
    }
    {
      isTeacher && navigate("/Teacher");
    }
  };
  return (
    <AppBar sx={{}}>
      <Toolbar>
        <Box
          className="icon"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src="/logo-favicon-50x50.png" alt="" />
          <Typography
            marginLeft={"10px"}
            variant="h5"
            noWrap
            alignItems={"center"}
            onClick={HandleClickbtn}
            component="div"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {" "}
            InternshipIU
          </Typography>
        </Box>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={HandleSearch}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleAnnounceMenuOpen}
          >
            <Badge badgeContent={announceNotRead.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {renderAlertMenu}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
    </AppBar>
  );
}
