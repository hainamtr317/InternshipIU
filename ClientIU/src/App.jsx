import React, { useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import StudentPage from "./pages/Student/StudentPage";
import LoginPage from "./pages/Auth/LoginPage";
import TeacherPage from "./pages/Teacher/TeacherPage";
import AdminPage from "./pages/Admin/AdminPage";
import socketIOClient from "socket.io-client";
import CompanyManagerPage from "./pages/Companies/CompanyManagerPage";
const host = "http://localhost:7789";

function App() {
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="Company/*" element={<CompanyManagerPage />} />
          <Route path="Student/*" element={<StudentPage />} />
          <Route path="Teacher/*" element={<TeacherPage />} />
          <Route path="Admin/*" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
