import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-800 font-bold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-12'>
        <div className='flex flex-col justify-center items-start gap-6 leading-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>1027 Jaalle Siyaad <br /> WX_Xalane, Wadajir, Mogadisho</p>
          <p className='text-gray-500'>Tel: +(252) 4 459-166 <br /> Email: madaaledesigner@gmail.com</p>
          <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-full'><Link to="/courses">Register Our Courses</Link></p>
        </div>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt="" />
      </div>
    </div>
  )
}

export default Contact