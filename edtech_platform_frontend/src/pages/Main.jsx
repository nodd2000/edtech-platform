import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import TeachersField from '../components/TeachersField'
import { fetchCourses, getTeachers } from '../api/apiFetching'

function Main() {
  const [courses, setCourses] = useState([])
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetchCourses()
    .then((data) => {
      setCourses(data)
    })
    }, [])

  useEffect(() => {

    getTeachers()
    .then((teachers) => {
      
      const fixedTeachers = teachers.map( (teacher) => ({
        'username': teacher.user.username,
        'id': teacher.id,
        'img_url': teacher.imgUrl,
        'bio': teacher.bio,
        'courses': teacher.courses.length}))
      console.log(fixedTeachers)
      const filterTeachers = fixedTeachers.filter(teacher => teacher.courses > 0)

      setTeachers(filterTeachers)
    })
    }, [])
    
  return (
    <div className='body'>
      <Header/>
      <div className="content">
          <CoursesField courses={courses}/>
          <TeachersField teachers={teachers}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
