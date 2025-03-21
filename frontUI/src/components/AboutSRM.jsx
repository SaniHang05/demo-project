import React from 'react';
import { motion } from 'framer-motion';

const AboutSRM = ({ img, title, desc }) => {
  return (
    <motion.div
      className="opacity-1 transform-none m-4 shadow-2xl"
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move it down
      whileInView={{
        opacity: 1, // Fade in when in view
        y: 0, // Move to normal position when in view
      }}
      transition={{
        duration: 1.2, // Duration of the animation
        ease: 'easeOut', // Ease-out effect for smooth animation
      }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view, and only trigger once
    >
      <div className="md:w-96 h-[26rem] mx-auto rounded-lg text-card-foreground shadow-sm p-4 bg-gray-800/50 backdrop-blur-lg border-gray-500 hover:bg-gray-900/70 transition-all duration-300 dropShadow">
        <img src={img} className="rounded-full w-16 md:w-40 mx-auto m-2" loading="lazy" />
        <h4 className="text-white pt-2">{title}</h4>
        <p className="text-gray-400 pb-3">{desc}</p>
      </div>
    </motion.div>
  );
};

export default AboutSRM;
