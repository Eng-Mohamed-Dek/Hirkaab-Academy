import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'

const Category = () => {
  const { category } = useContext(CourseContext)

  return (
    <div className='flex flex-col items-center gap-4 py-32 text-gray-800' id="speciality">
      <div className="text-3xl font-medium">Find by Category</div>
      <p className="flex sm:justify-center gap-4 pt-5 w-full items-center text-xs cursor-pointer">
        Si Fudud ku dhufo qeybtaa aad rabto inaad barato
      </p>
      <div className="flex flex-wrap sm:justify-center gap-32 pt-10 w-full">
        {category.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} to={`/courses/course-category/${item.category}`} key={index} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all durartion-500">
            <img className='w-16 sm:w-24 mb-2' src={item.image} />
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category