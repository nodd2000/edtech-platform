import React from 'react'

import { Link } from "react-router-dom"
import { useAuth } from '../auth/useAuth.jsx'
import { useInput } from '../hooks/useInput.jsx'

import "../styles/App.css"


const RegisterForm = () => {

  const { signUp} = useAuth()

  const [usernameProps, resetUsername] = useInput('')
  const [passwordProps, resetPassword] = useInput('')
  const [password2Props, resetPassword2] = useInput('')


  const submit = event => {
    event.preventDefault()

    if (passwordProps.value != password2Props.value) {
      alert('Passwords are not equal!')
      return false
    }

    signUp(usernameProps.value, passwordProps.value)
    resetUsername()
    resetPassword()
    resetPassword2()
  }

  return (
      <form className='login-form' onSubmit={submit}>
          <h3 class="div">Register</h3>

          <input 
          className='div'
          { ...usernameProps }
          type="text"
          name='username'
          placeholder='Username'
          required/>

          <input 
          className='div'
          { ...passwordProps }
          type="password" 
          name="password" 
          placeholder='Password' 
          required/>
          
          <input 
          className='div' 
          { ...password2Props }
          type="password" 
          name="repeat_password" 
          placeholder='Repeat password'
          required/>
          
          <button className='div'>Register</button>
          <p class="div"> Have an account? <Link to="/login">Click to Login</Link></p>
      </form>
  )
}



export default RegisterForm