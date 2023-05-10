import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import StudentPage from "./pages/Student/StudentPage";
import Loginpage from "./pages/Auth/Loginpage";
import TeacherPage from "./pages/Teacher/TeacherPage";
import Jobpage from "./pages/Job/JobPage";
import StudentCv from "./pages/Student/StudentCv";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Loginpage />} />
          <Route path="Student/*" element={<StudentPage />} />
          <Route path="Teacher/*" element={<TeacherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
