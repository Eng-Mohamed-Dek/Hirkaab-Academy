import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'

const Courses = () => {
  const { courses , currency } = useContext(CourseContext)

  const navigate = useNavigate()

  let { category } = useParams();

  // filter state 
  const [filterDoc, setFilterDoc] = useState([])
  const [filterShow, setFilterShow] = useState(true)

  // filtering function 
  const appFilter = () => {
    if (category) {
      setFilterDoc(courses.filter(course => course.category === category))
    } else {
      setFilterDoc(courses)
    }
  }

  // use effects to call the func-s all the time 
  useEffect(() => {
    appFilter()
  }, [courses, category])
 
  return (
    <div className="mx-4 sm:mx-[10%] mt-10">
      <p className='text-gray-500'>Go through Courses Category.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`ml-3 py-2 px-5 border rounded-full text-sm sm:hidden hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer`} onClick={() => setFilterShow(prev => !prev)}>Filter by Category</button>
        {filterShow && <div className={`${filterShow && 'flex flex-row flex-wrap'} 'flex md:flex-col gap-4 text-sm w-36 text-gray-700`}>
            <p onClick={() => { category === 'Graphic Design' ? navigate(`/courses/`) : navigate('/courses/course-category/Graphic Design') }} className={`${category === 'Graphic Design' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Graphic Design</p>
            <p onClick={() => { category === 'Web Design' ? navigate(`/courses/`) : navigate('/courses/course-category/Web Design') }} className={`${category === 'Web Design' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Web Design</p>
            <p onClick={() => { category === 'Development' ? navigate(`/courses/`) : navigate('/courses/course-category/Development') }} className={`${category === 'Development' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Development</p>
            <p onClick={() => { category === 'Video Editing' ? navigate(`/courses/`) : navigate('/courses/course-category/Video Editing') }} className={`${category === 'Video Editing' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Video Editing</p>
          </div>
          }
          <div className="w-[90%] grid grid-cols-auto gap-9 gap-y-6 px-3 sm:px-0">
            {filterDoc ? filterDoc.map((item, index) => (
              <div onClick={() => { navigate(`/course/${item.name}`); scrollTo(0, 0) }} key={index} className="border border-gray-300 rounded overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-700">
              <img className='bg-blue-50' src={item.image} />
              <img className='bg-blue-50 w-24 mt-2' src={item.start} />
              <p className="m-3 text-gray-900 text-2xl font-bold">{item.name}</p>
              <p className="m-3 text-gray-600 text-[13px]">{item.category} <b className="text-[20px] ml-2">{item.students}</b></p>
              <div className="p-4">
                  <p className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-10 h-10 bg-green-500 rounded-full">
                      <img src={item.tutorImg} alt="" className="rounded-full" />
                      </p> 
                      by {item.teacher}</p> 
              </div>
              <hr />
              <div className="p-5">
                  <p className="font-semibold"><span className="text-sm text-gray-400 line-through">{currency}{item.fees}</span> {currency}{item.discount}</p>
              </div>
          </div>        
          )) : courses.map((item, index) => (
            <div onClick={() => { navigate(`/course/${item.name}`); scrollTo(0, 0) }} key={index} className="border border-gray-300 rounded overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-700">
            <img className='bg-blue-50' src={item.image} />
            <img className='bg-blue-50 w-24 mt-2' src={item.start} />
            <p className="m-3 text-gray-900 text-2xl font-bold">{item.name}</p>
            <p className="m-3 text-gray-600 text-[13px]">{item.category} <b className="text-[20px] ml-2">{item.students}</b></p>
            <div className="p-4">
                <p className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-10 h-10 bg-green-500 rounded-full">
                    <img src={item.tutorImg} alt="" className="rounded-full" />
                    </p> 
                    by {item.teacher}</p> 
            </div>
            <hr />
            <div className="p-5">
                <p className="font-semibold"><span className="text-sm text-gray-400 line-through">{currency}{item.fees}</span> {currency}{item.discount}</p>
            </div>
        </div>        
        ))}
          </div>
      </div>
    </div>
  )
}

export default Courses