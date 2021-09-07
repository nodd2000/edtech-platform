import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import { fetchCourses } from '../api/apiFetching'



function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetchCourses()
    .then((data) => {
      setCourses(data)
    })
    }, [])


  return (
    <div className='body'>
      <Header/>
      <CoursesField courses={courses}/>
      <Footer/>
    </div>
  )
}

export default Courses;
