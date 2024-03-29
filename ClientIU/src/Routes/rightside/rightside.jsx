import * as React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDisplayRightSide from "../../components/Student/rightsideStuden";
import Teacherdisplayrightside from "../../components/Teacher/RightsideTeacher";

function Rightside() {
  return (
    <>
      <Routes>
        <Route path="/:StudentId" element={<Teacherdisplayrightside />} />
        <Route path="/GradeList" element={(<></>)}/>
        <Route path="/UserInformation" element={(<></>)}/>
        <Route path="/Report" element={(<></>)}/>
        <Route path="/CompanyManager" element={(<></>)}/>
        <Route path="/ListJobApplied" element={<StudentDisplayRightSide />} />
      </Routes>
    </>
  );
}

export default Rightside;
