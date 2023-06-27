import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import StudentPage from "./pages/Student/StudentPage";
import Loginpage from "./pages/Auth/Loginpage";
import TeacherPage from "./pages/Teacher/TeacherPage";
import AdminPage from "./pages/Admin/AdminPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Loginpage />} />
          <Route path="Student/*" element={<StudentPage />} />
          <Route path="Teacher/*" element={<TeacherPage />} />
          <Route path="Admin/*" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
