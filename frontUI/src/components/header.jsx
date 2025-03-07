import React, { useState } from 'react';
import { Button } from '@mui/material';  // Material UI Button

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="images/logo.png" alt="Logo" className="h-12 md:h-16" />

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button 
            className="text-white text-3xl focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 text-lg">
          <a href="#home" className="text-white no-underline font-medium">Home</a>
          <a href="#about" className="text-white no-underline font-medium">About</a>
          <a href="#courses" className="text-white no-underline font-medium">Courses</a>
          <a href="#login" className="text-white no-underline font-medium">Login</a>
          <a href="#signup" className="text-white no-underline font-medium">SignUp</a>
        </nav>
      </div>

      {/* Mobile Navigation (Sliding from the right) */}
      <div
        className={`lg:hidden bg-gray-800 p-4 mt-4 rounded-lg shadow-lg transform fixed top-0 right-0 h-full w-64 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <a href="#home" className="block py-2 text-white hover:bg-gray-600 transition duration-200">Home</a>
        <a href="#about" className="block py-2 text-white hover:bg-gray-600 transition duration-200">About</a>
        <a href="#courses" className="block py-2 text-white hover:bg-gray-600 transition duration-200">Courses</a>
        <a href="#login" className="block py-2 text-white hover:bg-gray-600 transition duration-200">Login</a>
        <a href="#signup" className="block py-2 text-white hover:bg-gray-600 transition duration-200">SignUp</a>
      </div>
    </header>
  );
};

export default Header;
