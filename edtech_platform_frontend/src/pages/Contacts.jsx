import '../styles/App.css'
import React, { useEffect, useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import CoursesField from '../components/CoursesField'
import TeachersField from '../components/TeachersField'
import { sendContact } from '../api/apiFetching'

import { useInput } from '../hooks/useInput.jsx'


function Contacts() {

  const [emailProps, resetEmail] = useInput('')
  const [subjectProps, resetSubject] = useInput('')
  const [messageProps, resetMessage] = useInput('')

  const [isSend, setSend] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    sendContact({'email': emailProps.value, 'subject': subjectProps.value, 'message': messageProps.value})
    setSend(true)
}

  useEffect(() => {

    }, [])
    
  return (
    <div className='body'>
      <Header/>
      <div className='course-page-content'>
      <h1 style={{margin:'20px'}}>Contacts</h1>


      {!isSend? 

      <form classname='course-edit-form' style={{margin:'20px'}} onSubmit={submit}>
        <input 
        className='from-element'
        { ...emailProps }
        style={{width: '300px'}} 
        type="email" 
        placeholder='Email' 
        name='email' 
        required/>

        <input 
        className='from-element'
        { ...subjectProps }
        style={{width: '300px'}} 
        type="text" 
        placeholder='Subject' 
        name='subject' 
        required/>

        <textarea 
        className='from-element' 
        { ...messageProps }
        style={{width: '300px', height: '100px'}} 

        type="text" 
        placeholder='Message' 
        name='message' 
        required/>

        <button className='from-element' >Send</button>
      </form>

       :
       <h3 style={{margin:'20px'}}>Thank you for contact us!</h3> }

      </div>
      
      <Footer/>
    </div>
  )
}

export default Contacts
