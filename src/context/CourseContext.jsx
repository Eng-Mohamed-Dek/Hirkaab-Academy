import { createContext } from 'react'
import { courses, category } from '../assets/assets.js'

//1- create context 
export const CourseContext = createContext(null)


//2- create function provider context value (menu_lists)
const CourseContextProvider = ({ children }) => {

  const currency = '$'
    
  return (
    <CourseContext.Provider value={{ currency, courses, category }}>
        { children }
    </CourseContext.Provider>
  )
}

export default CourseContextProvider