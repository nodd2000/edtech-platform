
import { Redirect } from "react-router-dom"

import React, { useEffect, useState } from "react"

import '../styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BecomeStudentButton from '../components/BecomeStudentButton'
import BecomeTeacherButton from '../components/BecomeTeacherButton'
import CoursesField from '../components/CoursesField'
import { useAuth } from '../auth/useAuth.jsx'
import Main from './Main'
import { FaPlusCircle } from "react-icons/fa"
import { addStudent, addTeacher, getTeachersExt, getStudentsExt } from "../api/apiFetching"


function UserPage() {
    const { user, setUser } = useAuth()
    const [student, setStudent] = useState()
    const [teacher, setTeacher] = useState()


    const submitButtonStudent = () => {
        addStudent(user)
        .then(() => {
            setUser({...user, isStudent: true})
        })
      }

    const submitButtonTeacher = () => {
        addTeacher(user)
        .then(() => {
            setUser({...user, isTeacher: true})
        })
      }

    useEffect(() => {
        if (user) {
          getTeachersExt()
          .then((teachers) => {
            const [ currentTeacher ] = teachers.filter(teacher_ => teacher_.user.username == user.username)
            setTeacher(currentTeacher)
          })

          getStudentsExt()
          .then((students) => {
            const [ currentStudent ] = students.filter(student_ => student_.user.username == user.username)
            setStudent(currentStudent)
          })
        }
    }, [user])


    if (user) {
        return (
            <div className='body'>
                <Header/>
                <div>
                    { student ? 
                    <CoursesField
                    title='You learn:' 
                    buttonTitle='Choose a course to learn'
                    buttonHref='/courses'
                    courses={student.courses} 
                    add={true}/> : <></> }

                    { teacher ? 
                    <CoursesField 
                    title='You teach:'
                    buttonTitle='Create new course'
                    buttonHref='/'
                    courses={teacher.courses} 
                    add={true}/> : <></> }

                </div>

                <div className='button-zone'>
                    { student ?  <div></div>: <BecomeStudentButton submit={user => submitButtonStudent(user)}/> }
                    { teacher ?  <div></div>: <BecomeTeacherButton submit={user => submitButtonTeacher(user)}/> }
                </div>
                <Footer/>
            </div>
        )
    }
    else {
        return <Main />
        // return <Redirect to='/' />
    }
        
}

export default UserPage
