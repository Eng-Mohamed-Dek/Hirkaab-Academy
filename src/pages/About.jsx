import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex justify-center leading-[2]'>
        <div className='flex flex-col gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Hirakab Academy is an Academy established in Dec, 2023. In the academy you will learn many things related to IT career such as Graphic Design, Videos Editing, Web Design iyo Web Development.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p> We want to help students to learn IT skill easily by helping the student to do everything in the course, the students we help are both men and women. We have a good Customer Care Team that helps everyone who comes in contact with us and provides the service they want regularly.</p>
        </div>
      </div>
    </div>
  )
}

export default About