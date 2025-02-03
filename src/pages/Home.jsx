import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import PopularCourses from '../components/PopularCourses'

const Home = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Header />
      <Category />
      <PopularCourses />
    </div>
  )
}

export default Home