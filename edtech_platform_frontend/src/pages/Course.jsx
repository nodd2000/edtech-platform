
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import '../styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TeachersField from '../components/TeachersField'
import { getCourses } from '../api/apiFetching'
import { useAuth } from '../auth/useAuth'

const Course = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const [ isSignedUp, setSignedUp ] = useState(false)

  const [course, setCourse] = useState(null)

  useEffect(() => {
    

    getCourses()
    .then((courses) => {
      const fixedCourses = courses.map( (course_) => ({
        'id': course_.id,
        'title': course_.title,
        'description': course_.description,
        'imgUrl': course_.imgUrl,
        'teachers': course_.teachers,
        'students': course_.students}))
      const [ currentCourse ] = fixedCourses.filter(course_ => course_.id == id)

      const courseTeachers = currentCourse.teachers.map( (teacher) => ({
        'username': teacher.user.username,
        'id': teacher.id,
        'imgUrl': teacher.imgUrl}))
      
      if (user) {
        setSignedUp(currentCourse.students.filter(student => student.user.username == user.username).length > 0) 
      }
      setCourse({...currentCourse, 'teachers': courseTeachers})
    })
      }, [user])
  
  
  return (
    <div className='body'>
      <Header/>

      {course ? 
      <div className='course-page-content'>
        <div className='course-title-line'>
          <h1 style={{margin:'20px'}}>{course.title}</h1>
          {isSignedUp? 
          <button>Sign out</button> :
          <button disabled={!user}>Sign up</button>
          } 
        </div>
        <h3 style={{margin:'20px'}}>{course.description}</h3>

        <div className='course-page-image'>
          <img src={course.imgUrl}></img>
        </div>
        
        <TeachersField teachers={course.teachers}/>
      </div>
      : <>Loading..</> }

      <Footer/>
    </div>
    )
}

export default Course;