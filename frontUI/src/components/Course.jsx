import React from 'react'
import * as motion from "motion/react-client"

const Course = ({icon,header,para}) => {
  return (
    <motion.div  
    initial={{ opacity: 0, scale: 0 }} 
    animate={{animation:'ease-in',animationDuration:3000,animationDelay:4000,animationTimeline:'inherit', opacity:1,scale:1}}
    className='opacity: 1; transform: none; m-4 shadow-2xl'>
    <div className="md:w-96 h-52 mx-auto rounded-lg text-card-foreground shadow-sm p-6 bg-gray-800/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 text-center">
    <i class={`${icon} text-4xl text-teal-200`}></i>
      <p className="text-xl font-medium text-white my-3">{header}</p>
      <p className="text-gray-400 text-lg font-light">{para}</p>
    </div>
    </motion.div>

  )
}

export default Course;