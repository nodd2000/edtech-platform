import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { editCourse, getTeachers, getCourses} from '../api/apiFetching'
import { useInput } from '../hooks/useInput'
import { useAuth } from '../auth/useAuth'
import { Redirect, useParams } from 'react-router-dom'


function EditCourse() {
    const { id } = useParams();
    const [teacher, setTeacher] = useState()
    const [isRedirect, setRedirect] = useState(false)

    const { user } = useAuth()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const [course, setCourse] = useState('')


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
        setTitle(currentCourse.title)
        setDescription(currentCourse.description)
        setImgUrl(currentCourse.imgUrl)
        setCourse(currentCourse)
        })



        if (user) {
            getTeachers()
            .then((teachers) => {
            const [currentTeacher]  = teachers.filter(teacher_ => teacher_.user.username == user.username )
            setTeacher(currentTeacher)
        })
        }
    }, [user])


    const submit = (event) => {
        event.preventDefault()
        console.log(course.students)
        editCourse(id, title, description, imgUrl, [teacher], course.students)

        setRedirect(true)
    }


    if (isRedirect) {
        return <Redirect to={`/courses/${id}`} />
    }

  return (
    <div className='body'>
      <Header/>
      <div className='course-page-content'>
      <h1 style={{margin:'20px'}}>Edit Course</h1>

      <form classname='course-edit-form' style={{margin:'20px'}} onSubmit={submit}>
        <input 
        className='from-element'
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{width: '300px'}} 
        type="text" 
        placeholder='Title' 
        name='title' 
        required/>

        <textarea 
        className='from-element'
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{width: '300px', height: '100px'}} 
        type="text" 
        placeholder='Description' 
        name='description' 
        required/>

        <input 
        className='from-element' 
        value={imgUrl}
        onChange={e => setImgUrl(e.target.value)}
        style={{width: '300px'}} 
        type="text" 
        placeholder='URL image' 
        name='imgUrl' 
        required/>

        <button className='from-element' >Edit</button>
      </form>

      </div>

      <Footer/>
    </div>
  )
}

export default EditCourse
