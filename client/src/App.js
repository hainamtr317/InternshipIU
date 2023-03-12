import "./App.css";
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Loginpage from "./pages/Auth/Loginpage";
function App() {
  return (
    <Router>
      <Routes >
{/*     
        <Route path="/signup" element={<Signup />}/>
          
        <Route path="/home" element={<Example />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Loginpage />}/>

      </Routes >
    </Router>
  );
}

export default App;