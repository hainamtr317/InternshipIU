import * as React from "react";
import JobCard from "../Job/Jobcard";
import "./mainlyout.scss";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import Jobdisplay from "../Job/Jobdisplay";
import Jobpage from "../../pages/Job/JobPage";
import StudentCv from "../../pages/Student/StudentCv";
import StudentInfoDisplay from "../../pages/Student/StudentInfordisplay";
import StudentAppliedJob from "../../pages/Student/StudentAppliedJob";
import StudentReport from "../../pages/Student/StudentReport";
function MainLayout() {
  return (
    <div className="MainLayout">
      <Routes>
        <Route index element={<Jobdisplay />} />
        <Route path="/job" element={<Jobpage />} />
        <Route path="/UserInformation" element={<StudentInfoDisplay />} />
        <Route path="/ListJobApplied/*" element={<StudentAppliedJob/>}/>
        <Route path="/ListJobApplied/Job" element={<Jobpage/>}/>
        <Route path="/Report" element={<StudentReport/>}/>
        <Route path="/MyCv" element={<StudentCv />} />
        {/* <Route path="/MyJobList" element{} */}
      </Routes>
      {/* <Grid container >
                {Array.from(Array(10)).map((_, index) => (
                    <Grid sx={{display:'flex',justifyContent: 'center',alignItems: 'start'}}
                     xs={12} md={6} xl={3} key={index}>
                        <JobCard />
                    </Grid>
                ))}
            </Grid> */}
    </div>
  );
}

export default MainLayout;
