import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'
import { FaBars, FaUserGraduate } from "react-icons/fa"

const SingleCourse = () => {
    const { courses, currency } = useContext(CourseContext)

    const navigate = useNavigate()

    let { name } = useParams();

    // filter state 
    const [filterCourse, setFilterCourse] = useState([])

    // filtering function 
    const appFilter = () => {
        if (name) {
            setFilterCourse(courses.filter(course => course.name === name))
        } else {
            setFilterCourse(courses)
        }
    }

    // use effects to call the func-s all the time 
    useEffect(() => {
        appFilter()
    }, [courses, name])

    return (
        <div>
            {/* banners  */}
            <div className='w-full h-[430px] overflow-hidden relative'>
                <div className='absolute top-0 right-0 w-full h-full opacity-30 bg-black'>
                </div>
                <div className='pt-32 pl-64 absolute top-0 right-0 w-full h-full'>
                    <h1 className='text-[50px] font-semibold text-white'>Course Details</h1>
                    {filterCourse.map((item, index) => (
                    <p className='w-[700px] mt-5 bg-white py-2 px-5 text-slate-500'>Hirkaab Academy  &rarr; <Link to="/courses" className="cursor-pointer">Courses</Link> &rarr; <Link to={`/courses/course-category/${item.category}`} className="cursor-pointer">{item.category}</Link> &rarr; {item.name}</p>
                    ))}
                </div>
                <img src="/coverimage.jpg" alt="" className='-mt-96'/>
            </div>
                <div className="w-[90%]px-3 sm:px-0 mx-4 sm:mx-[18%] mt-24">
                    {filterCourse.map((item, index) => (
                        <div onClick={() => { navigate(`/course/${item.name}`); scrollTo(0, 0) }} key={index} className="rounded overflow-hidden">
                            <img className='bg-blue-50 w-24' src={item.start} />
                            <p className='text-2xl font-bold mt-5'>{item.name}</p>
                            {/* info  */}
                            <div className='flex gap-2 items-center text-sm text-slate-500 mt-5'>
                                <img src={item.tutorImg} alt="" className="rounded-full w-10 mr-3 " /> by<span className='text-black'>{item.teacher}</span>Categories: <span className='text-black'>{item.category}</span>
                            </div>
                            
                            {/* course cover and side  */}
                            <div className='flex gap-10 mt-10'>
                                {/* cover image  */}
                                <img className='bg-blue-50 w-[800px] rounded' src={item.image} />
                                <div className="border-gray-300 border-[1.5px] w-[500px] bg-[#F4F6F9] h-[350px] rounded-lg overflow-hidden">
                                    {/* price  */}
                                    <div className='p-8'>
                                        <p className="font-semibold text-4xl"> {currency}{item.discount}
                                        <span className="ml-4 text-xl font-light text-gray-400 line-through">{currency}{item.fees}</span>
                                        </p>
                                       <button className='bg-[#01CD8E] text-white w-full p-3 font-light rounded-md mt-5 text-sm'>Add to Cart</button>
                                    </div>
                                    <div className='flex flex-col gap-7 bg-white p-8'>
                                        <div className='flex gap-3 items-center text-[#888a8d]'>
                                            <FaBars />
                                            <p>Intermeditae</p>
                                        </div>
                                        <div className='flex gap-3 items-center text-[#888a8d]'>
                                            {/* icon  */}
                                            <FaUserGraduate />
                                            <p>{item.students} Total Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* about  */}
                            <div className='mt-8'>
                                <h2 className='text-2xl font-bold text-slate-700'>About Course</h2>
                                <p className='text-sm font-light text-slate-700 mt-5'>{item.about}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SingleCourse