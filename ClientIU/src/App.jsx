import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import StudentHome from "./pages/Student/StudentPage"
import Loginpage from "./pages/Auth/Loginpage";



function App() {
  
  return (
    <div className="App">
          <Router>
            <Routes >
              <Route path="/" element={<StudentHome />} />
              <Route path="/login" element={<Loginpage />} />
            </Routes >
          </Router>
    
      
    </div>
  )
}

export default App
