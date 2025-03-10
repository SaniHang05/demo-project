import React from 'react'

const OurCourse = ({icon,header,para}) => {
  return (
    <div className='m-2 md:m-4'>
    <div className="w-full md:w-[26rem] h-64 mx-auto rounded-lg text-card-foreground shadow-sm p-6  bg-gray-800/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 dropShadow">
    <span className='flex justify-items-center pb-2'>
    <i class={`${icon} text-4xl text-teal-200`}></i>
      <p className="text-sm md:text-lg font-medium text-white mx-2 my-auto">{header}</p>
    </span>
    <i class={`ri-graduation-cap-line text-xl text-gray-400 roboto py-1`}> 4Years 60Seats</i>
      <p className="text-gray-300 text-sm md:text-lg font-light py-1 text-pretty roboto">{para}</p>
      <button className='text-blue-600 '>Know More..</button>
    </div>
    </div>
  )
}

export default OurCourse