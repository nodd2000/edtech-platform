
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import '../styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CourseCard from '../components/CourseCard'
import { getCourse } from '../api/apiFetching'


const Course = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourse(id)
    .then((data) => {
      setCourse(data)
    })
    }, [])

  return (
    <div className='body'>
      <Header/>
      {course ? <CourseCard id={course.id} title={course.title} description={course.description} img_url={course.img_url}/> 
      : <>Loading..</> }
      <Footer/>
    </div>
    )
}

export default Course;