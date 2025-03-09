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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-8 z-20">
      {/* Welcome Text */}
      <p className="text-5xl font-semibold animate-bounce text-white mb-4 roboto">
        Welcome to SRM University Sikkim
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 roboto">
        Shape Your Future in the Heart<br />of Sikkim
      </h1>

      {/* Description Text */}
      <p className="text-xl text-white mb-3 roboto">
        Experience world-class education amidst the breathtaking Himalayan landscape. Join a community<br />
        dedicated to innovation, culture, and academic excellence.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6">
        <Button
          variant="contained"
          className=""
        >
          Apply Now
        </Button>
        <Button
          variant="contained"
          className=""
        >
          Explore More
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Hero