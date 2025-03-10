import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
// import StudentLogin from './pages/student/studentLogin';
import AdminLogin from './pages/admin/adminLogin';
// import StudentSignUp from './pages/student/studentSignUp';
import AdminSignUp from './pages/admin/adminSignUp';
import AdminDashboard from './pages/admin/adminDashboard';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<StudentSignUp />} /> */}
          {/* <Route path="/login" element={<StudentLogin />} /> */}
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/signup" element={<AdminSignUp />} />
          <Route path="/dashboard" element={<AdminDashboard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
