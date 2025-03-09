import React from 'react';
import Hero from '../components/Hero';
import Course from '../components/Course';
import OurCourse from '../components/OurCourse';
import AboutSRM from '../components/AboutSRM';
import Footer from '../components/footer';

const Home = () => {
  return (
       <>
       <Hero/>
       
       <div className='bgColor py-10 flex flex-wrap justify-center'>
       <hr className='text-white'/>
       <div className='w-full py-10'>
       <img src="/images/logo2.png" className='w-72 md:w-[50rem] mx-auto my-2 animate-pulse img-fluid'/>
       </div>
       <Course icon={"ri-graduation-cap-line"} header={"Academic Excellence"} para={"Offering diverse programs with industry-relevant curriculum"}/>
       <Course icon={"ri-trophy-line"} header={"NAAC Accredited"} para={"Recognized for maintaining high educational standards"}/>
       <Course icon={"ri-team-line"} header={"Expert Faculty"} para={"Learn from experienced professors and industry experts"}/>
       <Course icon={"ri-global-line"} header={"Global Network"} para={"Strong industry connections and international collaborations"}/>
       </div>
       {/* Our Course */}

       <div className='bgColor py-5 flex flex-col justify-center px-5'>
       <hr className='text-white'/>
               <h1 className='text-center text-white py-2'>Our Courses</h1>
               <p className='text-center text-white text-xl pb-3'>Discover our wide range of undergraduate and postgraduate programs designed to shape your future</p>
               <div className='flex justify-center flex-wrap'>
               <OurCourse icon={"ri-code-s-slash-line"} header={"Computer Science & Engineering"} para={"Learn programming, algorithms, and software development with industry-relevant technologies."}/>

               <OurCourse icon={"ri-brain-line"} header={"Artificial Intelligence & ML"} para={"Explore machine learning, deep learning, and AI applications in real-world scenarios."}/>

               <OurCourse icon={"ri-flask-line"} header={"Biotechnology"} para={"Study life sciences, genetic engineering, and biotechnological applications."}/>
               
               <OurCourse icon={"ri-calculator-line"} header={"Mathematics & Computing"} para={"Combine mathematical theory with computational techniques and applications."}/>
               <OurCourse icon={"ri-stethoscope-line"} header={"Medical Sciences"} para={"Comprehensive medical education with modern healthcare practices."}/>
               <OurCourse icon={"ri-hand-coin-line"} header={"Business Management System"} para={"Learn programming, algorithms, and software development with industry-relevant technologies."}/>
               </div>

       </div>
       {/* About SRM University Sikkim */}
       <div className='bgColor py-5 flex flex-col justify-center flex-wrap'>
       <hr className='text-white'/>
       <h1 className='text-center text-white py-2 pt-3 roboto'>About SRM University Sikkim</h1>
       <p className='text-center text-white py-2 text-xl roboto'>SRM University Sikkim is committed to providing quality education and fostering academic excellence. Our<br/> NAAC A+ accreditation reflects our dedication to maintaining high educational standards and preparing<br/> students for successful careers.</p>
       <span className='flex justify-center flex-wrap'>
       <AboutSRM img={"./images/one.png"} title="Founder Chancellor’s Desk" desc="We can’t predict, but we can ensure that our students will be the most knowledgeable of leaders and it’s not only our aspiration but also our strong commitment to establish SRM University at Sikkim as the center of excellence of higher education in NE India."/>

       <AboutSRM img={"./images/two.png"} title="Chancellor’s Desk" desc="Education at SRM is a unique and marvelous combination of traditional and modern methods of teaching. It caters to the current demands of competency expect by the industry and centers the learner at the core of its commitment to higher education."/>

       <AboutSRM img={"./images/three.png"} title="Vice Chancellor’s Desk" desc="SRM University Sikkim has entered fifth year of its academic journey. The university has come up with significant innovations in teaching - learning process and functioning. The curriculum framed is keeping in mind the enhancement Read More"/>
       </span>

       
       </div>
       {/* Footer Section */}
       <div className=' bgColor pt-5 pb-3 flex flex-col justify-center'>
       <hr className='text-white'/>
       <Footer/>
       </div>
       </>
  );
}

export default Home;