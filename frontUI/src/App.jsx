import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import StudentLogin from "./pages/student/studentLogin";
import AdminLogin from "./pages/admin/adminLogin";
import StudentSignUp from "./pages/student/studentSignUp";
import AdminSignUp from "./pages/admin/adminSignUp";
import AdminDashboard from "./pages/admin/adminDashboard";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import StudentDashboard from "./pages/student/StudentDashboard";

function App() {
  return (
    <>
      
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<StudentSignUp />} />
            <Route path="/login" element={<StudentLogin />} />
            <Route path="/dashboard" element={<StudentDashboard/>} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminsignup" element={<AdminSignUp />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
          </Routes>
    </>
  );
}

export default App;
