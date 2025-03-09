import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between md:justify-around items-center px-3 py-2'>
      <img src="/images/logo.png" alt="Logo" className='img-fluid w-32 md:w-36' />
      <span className='my-auto hidden md:flex'>
        <Link to='/' className='noUnderLine px-3  text-lg font-medium text-white hoverUnderLine '>Home</Link>
        <Link to='/' className='noUnderLine px-3  text-lg font-medium text-white hoverUnderLine'>Course</Link>
        <Link to='/' className='noUnderLine px-3  text-lg font-medium text-white hoverUnderLine'>About</Link>
        <Link to='/' className='noUnderLine px-3  text-lg font-medium text-white hoverUnderLine'>Contact</Link>
      </span>
      <span className='hidden md:flex'>
      <Link to='/login' className='noUnderLine  text-lg font-medium btn btn-success mx-2 px-4'>Login</Link>
      <Link to='/signup' className='noUnderLine  text-lg font-medium btn btn-primary px-4'>Register</Link>
      </span>
      {/* Phone Menu */}
      <div className='md:hidden my-auto'>
        <i className="ri-menu-line text-3xl cursor-pointer text-gray-900" onClick={toggleMenu}></i>
      </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={toggleMenu}>
      <div className='fixed right-0 top-0 w-64 h-full bg-blue-900 shadow-lg z-50 p-5'>
        <i className="ri-close-line text-3xl cursor-pointer text-white relative left-36" onClick={toggleMenu}></i>
        <nav className='mt-5'>
          <Link to='/' className='block py-3 px-4 text-xl text-white noUnderLine'>Home</Link>
          <Link to='/about' className='block py-3 px-4 text-xl text-white noUnderLine'>About</Link>
          <Link to='/contact' className='block py-3 px-4 text-xl text-white noUnderLine'>Contact</Link>
          <Link to='/login' className='block py-3 px-4 text-xl text-white noUnderLine'>Login</Link>
          <Link to='/signup' className='block py-3 px-4 text-xl text-white noUnderLine'>Register</Link>
        </nav>
      </div>
    </div>
  )}
</div>
  );
};

export default Header;