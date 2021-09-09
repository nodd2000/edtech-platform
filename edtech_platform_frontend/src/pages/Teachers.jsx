import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import TeachersField from '../components/TeachersField'
import { getTeachers } from '../api/apiFetching'



function Teachers() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    getTeachers()
    .then((teachers) => {
      
      const fixedTeachers = teachers.map( (teacher) => ({
        'username': teacher.user.username,
        'id': teacher.id,
        'imgUrl': teacher.imgUrl,
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
      <TeachersField teachers={teachers}/>
      <Footer/>
    </div>
  )
}

export default Teachers;
