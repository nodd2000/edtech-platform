import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import TeachersField from '../components/TeachersField'


function Main() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCourses(data)
      });
    }, []);
    
  return (
    <div className='body'>
      <Header/>
      <div className="content">
          <CoursesField courses={courses}/>
          <TeachersField />
      </div>
      <Footer/>
    </div>
  )
}

export default Main
