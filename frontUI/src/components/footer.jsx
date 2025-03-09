import React from 'react'

const Footer = () => {
  return (
    <div className='container-sm'>
        <div className="row mt-4">
            <div className="col-4">
                <img src="/images/logo.png" className='w-52'/>
                <p className='text-white py-3'>Empowering minds, shaping futures<br/> through excellence in education</p>
            </div>
            <div className="col-4">
            <h4 className='text-white'>Quick Links</h4>
            <p className='text-white'>Academics</p>
            <p className='text-white'>Admissions</p>
            <p className='text-white'>Research</p>
            <p className='text-white'>Campus Life</p>
            </div>
            <div className="col-4">
            <h4 className='text-white'>Connect With Us</h4>
            <p className='text-white'>Facebook</p>
            <p className='text-white'>Twitter</p>
            <p className='text-white'>LinkedIn</p>
            <p className='text-white'>Instagram</p>
            </div>
            <hr className='text-white'/>
            <p className='text-center text-white'>© 2025 SRM University Sikkim. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer