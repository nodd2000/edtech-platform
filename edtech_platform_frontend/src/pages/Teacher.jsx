
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import '../styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import { getTeachers } from '../api/apiFetching'



const Teacher = () => {
  const { id } = useParams();

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {

    getTeachers()
    .then((teachers) => {

      const fixedTeachers = teachers.map( (teacher_) => ({
        'id': teacher_.id,
        'bio': teacher_.bio,
        'imgUrl': teacher_.imgUrl,
        'username': teacher_.user.username,
        'courses': teacher_.courses}))
      const [ currentTeacher ] = fixedTeachers.filter(teacher_ => teacher_.id == id)

      const teacherCourses = currentTeacher.courses.map( (course) => ({
        'title': course.title,
        'id': course.id,
        'imgUrl': course.imgUrl}))
        
      setTeacher({...currentTeacher, 'courses': teacherCourses})

    })

    }, [])

  return (
    <div className='body'>
      <Header/>

      {teacher ? 
      <div className='course-page-content'>
        <h1 style={{margin:'20px'}}>{teacher.username}</h1>  
        <h3 style={{margin:'20px'}}>{teacher.bio}</h3>

        <div className='course-page-image'>
          <img src={teacher.imgUrl}></img>
        </div>
        
        <CoursesField courses={teacher.courses}/>
      </div>
      : <>Loading..</> }

      <Footer/>
    </div>
    ); 

}

export default Teacher;