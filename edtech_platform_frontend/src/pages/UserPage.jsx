
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
import axios from 'axios'

const queryStudents = ` 
query {
  allStudents {
    id,
    user {
      username
    }
    courses {
      id,
      title
    }
  } 
}`

const queryTeachers = ` 
query {
  allTeachers {
    id,
    user {
      username
    }
    courses {
      id,
      title
    }
  } 
}`


function UserPage() {
    const { user, setUser } = useAuth()
    const [student, setStudent] = useState()
    const [teacher, setTeacher] = useState()


    const submitButtonStudent = () =>{
        axios.post('http://127.0.0.1:8000/api/students/', 
        { user: `http://127.0.0.1:8000/api/users/${user.id}/`,
          courses: [] }
        )
        .then((response) => {
            setUser({...user, isStudent:true})
        })
      }

    const submitButtonTeacher = () =>{
        axios.post('http://127.0.0.1:8000/api/teachers/', 
        { user: `http://127.0.0.1:8000/api/users/${user.id}/`,
          courses: [] }
        )
        .then((response) => {
            setUser({...user, isTeacher:true})
        })
      }

    useEffect(() => {
        if (user) {

            axios.post('http://127.0.0.1:8000/graphql', 
            { query: queryTeachers }
            )
            .then((response) => {
              return response.data.data.allTeachers
            })
            .then((teachers) => {
              const [ currentTeacher ] = teachers.filter(teacher_ => teacher_.user.username == user.username)
              setTeacher(currentTeacher)
            })
            .catch( e => { console.log(e)}
            )

        }

    }, [user])

    useEffect(() => {
        
        if (user) {
          axios.post('http://127.0.0.1:8000/graphql', 
          { query: queryStudents }
          )
          .then((response) => {
            return response.data.data.allStudents
          })
          .then((students) => {
            const [ currentStudent ] = students.filter(student_ => student_.user.username == user.username)
            setStudent(currentStudent)
          })
          .catch( e => { console.log(e)}
          )
        }
    
        }, [user])


    if (user) {
        return (
            <div className='body'>
                <Header/>

                <div>
                    { student ? <CoursesField title='You learn:' courses={student.courses} /> : <></> }
                    { teacher ? <CoursesField title='You teach:' courses={teacher.courses} /> : <></> }
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
