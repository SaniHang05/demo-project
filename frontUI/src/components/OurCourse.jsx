import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OurCourse = ({ icon, header, para }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when the element is in view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const element = document.getElementById('course-card'); // Reference to the element

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <motion.div
      id="course-card" // Attach ID for observation
      initial={{ opacity: 0, y: 50 }} // Start from below and invisible
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Slide up and fade in when in view
      transition={{
        duration: 1.2, // Duration of the animation
        ease: 'easeOut', // Ease-out effect for smooth animation
      }}
      className="md:m-4"
    >
      <div className="w-full md:w-[26rem] h-64 mx-auto rounded-lg text-card-foreground shadow-sm p-6 bg-gray-800/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 dropShadow">
        <span className="flex justify-items-center pb-2">
          <i className={`${icon} text-4xl text-teal-200`}></i>
          <p className="text-sm md:text-lg font-medium text-white mx-2 my-auto">{header}</p>
        </span>
        <i className="ri-graduation-cap-line text-xl text-gray-400 roboto py-1"> 4Years 60Seats</i>
        <p className="text-gray-300 text-sm md:text-lg font-light py-1 text-pretty roboto">{para}</p>
        <button className="text-blue-600">Know More..</button>
      </div>
    </motion.div>
  );
};

export default OurCourse;
