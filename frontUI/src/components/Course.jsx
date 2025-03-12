import React from 'react';
import { motion } from 'framer-motion'; // Make sure to import from 'framer-motion'

const Course = ({ icon, header, para }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Start with opacity 0 and slight scale
      animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal scale
      transition={{
        duration: 1.5, // Duration of the animation
        delay: 0.5, // Delay before the animation starts
        ease: 'easeInOut', // Smooth easing effect
      }}
      className='m-4 shadow-2xl'
    >
      <div className="md:w-96 h-52 mx-auto rounded-lg text-card-foreground shadow-sm p-6 bg-gray-800/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 text-center">
        <i className={`${icon} text-4xl text-teal-200`}></i>
        <p className="text-xl font-medium text-white my-3">{header}</p>
        <p className="text-gray-400 text-lg font-light">{para}</p>
      </div>
    </motion.div>
  );
};

export default Course;
