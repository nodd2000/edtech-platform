import React, {useState} from 'react';

import { Link, Redirect } from "react-router-dom";
import {useAuth} from '../../../auth/useAuth.js'

import "./LoginForm.css"

const LoginForm = () => {

  let auth = useAuth();

  const [inputField , setInputField] = useState({
    username: '',
    password: ''
    })

  const inputsHandler = (e) => {
      setInputField( { ...inputField, [e.target.name]: e.target.value} )
  }

  const submitButton = () =>{
      auth.signin(inputField.username, inputField.password)
  }


  if (auth.user) {
    return <Redirect to='/' />
  }

  return (
      <div className='login-form'>
          <h3 class="div">Please sign in</h3>
          <input className='div' name='username' type="text" placeholder='Username' onChange={inputsHandler} />
          <input className='div' type="password" name="password" placeholder='Password' onChange={inputsHandler} />
          <button className='div' onClick={submitButton}>Sign In</button>
          <p class="div"> New User? <Link to="/register">Click to Register!</Link></p>
      </div>
  );
}

export default LoginForm;