import '../styles/App.css'
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import TeachersField from '../components/TeachersField'
import { editCourse } from '../api/apiFetching'

function EditCourse() {
    const { id } = useParams();
    
    return (
        <div className='body'>
        <Header/>
        <h1>Edit course!</h1>
        <Footer/>
        </div>
    )
}

export default EditCourse
