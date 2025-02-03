import { useContext } from "react"
import { CourseContext } from "../context/CourseContext"
import { useNavigate } from 'react-router-dom'

const PopularCourses = () => {
    const { courses , currency } = useContext(CourseContext)

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 my-16 px-40 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-bold">Popular Courses</h1>
            <div className="w-[90%] grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {courses?.slice(0, 8).map((item, index) => (
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

    )
}

export default PopularCourses