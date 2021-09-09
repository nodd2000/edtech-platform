import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import TeachersField from '../components/TeachersField'
import { addCourse } from '../api/apiFetching'

function AddCourse() {
    
  return (
    <div className='body'>
      <Header/>
      <h1>Add course!</h1>
      <Footer/>
    </div>
  )
}

export default AddCourse
