import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import StudentLogin from './pages/studentLogin';
import StudentSignUp from './pages/studentSignUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/signup" element={<StudentSignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
