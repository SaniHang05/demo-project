import React from 'react'

const AboutSRM = ({img,title,desc}) => {
  return (
    <div className='opacity: 1; transform: none; m-4 shadow-2xl'>
    <div className="md:w-96 h-[26rem] mx-auto rounded-lg text-card-foreground shadow-sm p-4 bg-gray-800/50 backdrop-blur-lg border-gray-500 hover:bg-gray-900/70 transition-all duration-300 dropShadow">
      <img src={img} className='rounded-full w-16 md:w-40 mx-auto m-2' loading='lazy'/>
      <h4 className='text-white pt-2'>{title}</h4>
      <p className='text-gray-400 pb-3'>{desc}</p>
    </div>
    </div>
  )
}

export default AboutSRM