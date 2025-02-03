import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/course-category/:category" element={<Courses />} />
        <Route path="/course/:name" element={<SingleCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App