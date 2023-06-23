import * as React from "react";

// import "./mainlyout.scss";
import { Routes, Route } from "react-router-dom";

import JobsDisplay from "../../components/Job/JobsDisplay";
import Jobpage from "../../pages/Job/JobPage";
import StudentCv from "../../pages/Student/StudentCv";
import StudentInfoDisplay from "../../pages/Student/StudentInfordisplay";
import StudentAppliedJob from "../../pages/Student/StudentAppliedJob";
import StudentReport from "../../pages/Student/StudentReport";
import TeacherListStudents from "../../pages/Teacher/TeacherViewStudentList";
import { Box } from "@mui/material";
import StudentDisplay from "../../components/Student/StudentDisplay";

import TeacherGradeView from "../../pages/Teacher/TeacherGradeview";
import ApplyJob from "../../components/Job/ApplyFrom";
import { useSelector, useDispatch } from "react-redux";
import { Selector } from "../../redux/userSlice";
import CompanyPage from "../../pages/Companies/CompanyPage";
function MainLayout() {
  //set role display
  const role = useSelector(Selector);
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
    console.log(role);
    // SetStoreState(role);
    CheckRoleUser(role);
  }, [role]);
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

        <Route path="/job/:job_id" element={<Jobpage />} />
        <Route path="/UserInformation" element={<StudentInfoDisplay />} />
        <Route path="/ListJobApplied/*" element={<StudentAppliedJob />} />
        <Route path="/ListJobApplied/job/:job_id" element={<Jobpage />} />
        <Route path="/job/:job_id/Apply" element={<ApplyJob />} />
        <Route path="/Report" element={<StudentReport />} />
        <Route path="/MyCv" element={<StudentCv />} />
        <Route path="/StudentId" element={<StudentDisplay />} />
        {/* <Route path="/StudentId/Grading" element={<GradingStudent />} /> */}
        <Route path="/GradeList" element={<TeacherGradeView />} />
        <Route path="/Company" element={<CompanyPage />} />
      </Routes>
    </Box>
  );
}

export default MainLayout;
