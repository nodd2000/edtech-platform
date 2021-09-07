
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import '../styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TeacherCard from '../components/TeacherCard'
import { getTeacher, customFetch } from '../api/apiFetching'



const Teacher = () => {
  const { id } = useParams();

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    getTeacher(id)
    .then((data) => {
      customFetch(data.user)
      .then((user) => {
        setTeacher({...data, 'username': user.username})
      })

    })
    }, [])

  return (
    <div className='body'>
      <Header/>
      { teacher? <TeacherCard id={teacher.id} bio={teacher.bio} name={teacher.username} img_url={teacher.img_url}/> 
      :<>Loading..</> }
      <Footer/>
    </div>
    ); 

}

export default Teacher;