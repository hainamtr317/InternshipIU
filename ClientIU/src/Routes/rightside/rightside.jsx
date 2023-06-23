import * as React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDisplayRightSide from "../../components/Student/rightsideStuden";
import Teacherdisplayrightside from "../../components/Teacher/RightsideTeacher";

function Rightside() {
  return (
    <>
      <Routes>
        <Route path="/StudentId" element={<Teacherdisplayrightside />} />
        <Route path="/ListJobApplied" element={<StudentDisplayRightSide />} />
      </Routes>
    </>
  );
}

export default Rightside;
