import React from 'react';
import Hero from '../components/Hero';
import Course from '../components/Course';

const Home = () => {
  return (
       <>
       <Hero/>
       <div className='bgColor py-20 flex flex-wrap justify-center'>
       <Course icon={"ri-graduation-cap-line"} header={"Academic Excellence"} para={"Offering diverse programs with industry-relevant curriculum"}/>
       <Course icon={"ri-trophy-line"} header={"NAAC Accredited"} para={"Recognized for maintaining high educational standards"}/>
       <Course icon={"ri-team-line"} header={"Expert Faculty"} para={"Learn from experienced professors and industry experts"}/>
       <Course icon={"ri-global-line"} header={"Global Network"} para={"Strong industry connections and international collaborations"}/>
       </div>
       <div className='bgColor py-5 flex justify-center'>

       </div>
       </>
  );
}

export default Home;