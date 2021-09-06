import React from 'react'

import { Link, Redirect } from "react-router-dom"
import { useAuth } from '../auth/useAuth.jsx'
import { useInput } from '../hooks/useInput.jsx'

import "../styles/App.css"


const LoginForm = () => {

  const { user, signIn} = useAuth();

  const [usernameProps, resetUsername] = useInput('')
  const [passwordProps, resetPassword] = useInput('')

  const submit = event => {
    event.preventDefault()
    signIn(usernameProps.value, passwordProps.value)
    resetUsername()
    resetPassword()
  }


  if (user) {
    return <Redirect to='/' />
  }

  return (
      <form className='login-form' onSubmit={submit}>

          <h3 class="div">Please sign in</h3>

          <input
          className='div' 
          { ...usernameProps }
          type="text" 
          placeholder='Username' 
          name='username' 
          required/>

          <input 
          className='div' 
          { ...passwordProps }
          type="password" 
          placeholder='Password' 
          name="password" 
          required/>

          <button className='div'> Sign In</button>
          <p class="div"> New User? <Link to="/register">Click to Register!</Link></p>

      </form>
  );
}

export default LoginForm;