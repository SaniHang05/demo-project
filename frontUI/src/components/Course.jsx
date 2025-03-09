import React from 'react'

const Course = ({icon,header,para}) => {
  return (
    <div className='opacity: 1; transform: none; m-4'>
    <div className="md:w-96 h-52 mx-auto rounded-lg text-card-foreground shadow-sm p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
    <i class={`${icon} text-4xl text-teal-200`}></i>
      <p className="text-xl font-medium text-white my-3">{header}</p>
      <p className="text-gray-400 text-lg font-light">{para}</p>
    </div>
    </div>

  )
}

export default Course;