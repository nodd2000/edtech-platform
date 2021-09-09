import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import TeachersField from '../components/TeachersField'
import { fetchCourses, getTeachers } from '../api/apiFetching'

function Contacts() {

  useEffect(() => {

    }, [])
    
  return (
    <div className='body'>
      <Header/>
      <div className='course-page-content'>
      <h1 style={{margin:'20px'}}>Contacts</h1>

      </div>
      
      <Footer/>
    </div>
  )
}

export default Contacts
