import * as React from "react";

// import "./mainlyout.scss";
import { Routes, Route } from "react-router-dom";

import JobsDisplay from "../../components/Job/JobsDisplay";
import Jobpage from "../../pages/Job/JobPage";
import StudentCv from "../../pages/Student/StudentCv";
import StudentInfoDisplay from "../../pages/Student/StudentInfordisplay";
import TeachInfoDisplay from "../../pages/Teacher/TeacherInfordisplay";
import StudentAppliedJob from "../../pages/Student/StudentAppliedJob";
import StudentReport from "../../pages/Student/StudentReport";
import TeacherListStudents from "../../pages/Teacher/TeacherViewStudentList";
import { Box, Skeleton, Stack } from "@mui/material";
import StudentDisplay from "../../components/Student/StudentDisplay";
import TeacherGradeView from "../../pages/Teacher/TeacherGradeview";
import ApplyJob from "../../components/Job/ApplyFrom";
import { useSelector, useDispatch } from "react-redux";
import { Selector } from "../../redux/userSlice";
import CompanyPage from "../../pages/Companies/CompanyPage";
import UserManger from "../../pages/Admin/UserManger";
import CompanyManger from "../../pages/Admin/CompanyManager";
import JobsManager from "../../pages/Admin/JobsManager";
import CompanyManagerPage from "../../pages/Companies/CompanyManagerPage";
import CompanyViewJobs from "../../pages/Companies/CompanyViewJob";
import CompanyMangerInfo from "../../pages/Companies/CompanyManagerInfor";
import ComJobsManager from "../../pages/Companies/CompanyManagerJob";

function MainLayout() {
  //set role displays
  const role = useSelector(Selector);
  const [storeState, SetStoreState] = React.useState();
  const [isStudent, SetIsStudent] = React.useState(true);
  const [isTeacher, SetIsTeacher] = React.useState(false);
  const [isAdmin, SetIsAdmin] = React.useState(false);
  const [isCompanyLogin, SetIsCompanyLogin] = React.useState(false);
  const [isLoading, SetIsLoading] = React.useState(true);

  const CheckRoleUser = (role) => {
    if (role === "student") {
      SetIsStudent(true);
      SetIsTeacher(false);
      SetIsAdmin(false);
      console.log("displayStudent");
    } else if (role === "teacher") {
      SetIsStudent(false);
      SetIsTeacher(true);
      SetIsAdmin(false);
      console.log("display Teacher");
    } else if (role === "admin") {
      SetIsStudent(false);
      SetIsTeacher(false);
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
    await CheckRoleUser(data.userRole);
    SetIsLoading(false);
  };
  React.useEffect(() => {
    getRole();
  }, []);
  if (isLoading) {
    return (
      <Box
        className="MainLayout"
        sx={{
          border: "2px solid rgba(219, 219, 219)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          height: "auto",
        }}
      >
        <Stack spacing={1}>
          <Skeleton variant="rectangular" width="100%" height="200px" />
          <Skeleton variant="rectangular" width="100%" height="200px" />
          <Skeleton variant="rectangular" width="100%" height="200px" />
        </Stack>
      </Box>
    );
  }
  return (
    <Box
      className="MainLayout"
      sx={{
        border: "2px solid rgba(219, 219, 219)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        height: "auto",
      }}
    >
      <Routes>
        {/* Route for Student */}
        {isStudent && <Route index element={<JobsDisplay />} />}
        {/* Route for Teacher */}
        {isTeacher && <Route index element={<TeacherListStudents />} />}
        {isAdmin && (
          <>
            <Route index element={<UserManger />} />{" "}
            <Route path="/JobsManager" element={<JobsManager />} />
            <Route path="/CompanyManager" element={<CompanyManger />} />
          </>
        )}
        {isCompanyLogin && (
          <>
            <Route index element={<CompanyViewJobs />} />{" "}
            <Route path="/JobsManager" element={<ComJobsManager />} />
            <Route path="/CompanyManager" element={<CompanyMangerInfo />} />
          </>
        )}

        <Route path="/job/:job_id" element={<Jobpage />} />
        <Route path="/Report" element={<StudentReport />} />
        {isStudent && (
          <>
            <Route path="/UserInformation" element={<StudentInfoDisplay />} />
            <Route path="/Company/:companyName" element={<CompanyPage />} />
            <Route path="/ListJobApplied/*" element={<StudentAppliedJob />} />
            <Route path="/ListJobApplied/job/:job_id" element={<Jobpage />} />
            <Route path="/job/:job_id/Apply" element={<ApplyJob />} />
            <Route path="/MyCv" element={<StudentCv />} />
          </>
        )}
        {isTeacher && (
          <Route path="/UserInformation" element={<TeachInfoDisplay />} />
        )}

        {isTeacher && <Route path="/:StudentId" element={<StudentDisplay />} />}
        {/* <Route path="/StudentId/Grading" element={<GradingStudent />} /> */}
        {isTeacher && (
          <Route path="/GradeList" element={<TeacherGradeView />} />
        )}
      </Routes>
    </Box>
  );
}

export default MainLayout;
