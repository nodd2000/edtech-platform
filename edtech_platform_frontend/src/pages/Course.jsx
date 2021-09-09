
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import '../styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TeachersField from '../components/TeachersField'
import { getCourses, getStudentsExt, changeCourses} from '../api/apiFetching'
import { useAuth } from '../auth/useAuth'

const Course = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const [student, setStudent] = useState()
  const [ isSignedUp, setSignedUp ] = useState(false)

  const [course, setCourse] = useState(null)

  const submitSignOut = () => {
    changeCourses(
      user.id,
      student.id,
      student.courses.filter(course_ => course_.id != id)
      )
    .then(() => setSignedUp(false))
  }

  const submitSignUp = () => {
    changeCourses(
      user.id,
      student.id,
      student.courses.concat( {id: id} )
      )
    .then(() => setSignedUp(true))
  }

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

        getStudentsExt()
        .then((students) => {
          const [ currentStudent ] = students.filter(student_ => student_.user.username == user.username)
          setStudent(currentStudent)
        })

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
          <button onClick={submitSignOut} >Sign out</button> :
          <button onClick={submitSignUp} disabled={ !user | !student }>Sign up</button>
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