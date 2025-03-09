import React from 'react'
import Button from '@mui/material/Button';
import Header from './Header'
const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
      
    {/* Dark Overlay: Only covering the background image */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>

    {/* Header Component */}
    <span className="relative z-20 " >
    <Header />
    </span>


    {/* Content Section */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-8 z-20 w-full">
      {/* Welcome Text */}

      <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-4 rubik animate-bounce">
        Welcome to SRM University Sikkim
      </p>

      {/* Main Heading */}
      <h1 className="text-xl  md:text-6xl font-extrabold text-white mb-6 roboto">
        Shape Your Future in the Heart<br />of Sikkim
      </h1>

      {/* Description Text */}
      <p className="text-md w-full md:text-xl text-white mb-3 raleway py-2">
        Experience world-class education amidst the breathtaking Himalayan landscape. Join a community<br />
        dedicated to innovation, culture, and academic excellence.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6">
        <button
          className="btn btn-primary py-2 px-4 font-medium text-2xl"
        >
          Apply Now
        </button>
        <button
          className="btn btn-success py-2 px-4 font-medium text-2xl"
        >
          Explore More
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero