import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { addCourse, getTeachers } from '../api/apiFetching'
import { useInput } from '../hooks/useInput'
import { useAuth } from '../auth/useAuth'
import { Redirect } from 'react-router-dom'


function AddCourse() {
    const [teacher, setTeacher] = useState()
    const [isRedirect, setRedirect] = useState(false)

    const { user } = useAuth()

    useEffect(() => {

        if (user) {
            getTeachers()
            .then((teachers) => {
            const [ currentTeacher ] = teachers.filter(teacher_ => teacher_.user.username == user.username )
            setTeacher(currentTeacher)
        })
        }
    }, [user])


    const submit = (event) => {
        event.preventDefault()

        addCourse(titleProps.value, descriptionProps.value, urlImgProps.value, teacher.id)

        setRedirect(true)
        resetTitle()
        resetDescription()
        resetUrlImg()
    }

    const [titleProps, resetTitle] = useInput('')
    const [descriptionProps, resetDescription] = useInput('')
    const [urlImgProps, resetUrlImg] = useInput('')

    if (isRedirect) {
        return <Redirect to='/' />
    }

  return (
    <div className='body'>
      <Header/>
      <div className='course-page-content'>
      <h1 style={{margin:'20px'}}>Create new course</h1>

      <form classname='course-edit-form' style={{margin:'20px'}} onSubmit={submit}>
        <input 
        className='from-element'
        { ...titleProps }
        style={{width: '300px'}} 
        type="text" 
        placeholder='Title' 
        name='title' 
        required/>

        <textarea 
        className='from-element'
        { ...descriptionProps }
        style={{width: '300px', height: '100px'}} 
        type="text" 
        placeholder='Description' 
        name='description' 
        required/>

        <input 
        className='from-element' 
        { ...urlImgProps }
        style={{width: '300px'}} 
        type="text" 
        placeholder='URL image' 
        name='imgUrl' 
        required/>

        <button className='from-element' >Create</button>
      </form>

      </div>

      <Footer/>
    </div>
  )
}

export default AddCourse
