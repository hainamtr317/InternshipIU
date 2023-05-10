import * as React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDisplayRightSide from "../../components/Student/rightsideStuden";


function Rightside() {
  return (
    <>
      <Routes>
        <Route path="/StudentId" element={<StudentDisplayRightSide />}/>
        <Route path="/ListJobApplied" element={<StudentDisplayRightSide />}/>
      </Routes>
    </>
  );
}

export default Rightside;
