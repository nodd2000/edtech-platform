import React, {useState} from 'react';

import { Link, Redirect} from "react-router-dom";
import "../LoginScreen.css"
import {useAuth} from '/var/app/src/components/useAuth.js'



const RegisterForm = () => {
  let auth = useAuth();

  const [inputField , setInputField] = useState({
    username: '',
    password: '',
    repeat_password: ''
    })

  const inputsHandler = (e) => {
      setInputField( { ...inputField, [e.target.name]: e.target.value} )
  }

  const submitButton = () =>{
      if (inputField.password != inputField.repeat_password) {
        alert('Passwords are not equal!')
        return false;
      }
      auth.signup(inputField.username, inputField.password)

  }

  return (
    <div className='login-screen'>
      <div className='login-form'>
          <h3 class="div">Register</h3>
          <input className='div' type="text" name='username'  placeholder='Username' onChange={inputsHandler} />
          <input className='div' type="password" name="password" placeholder='Password' onChange={inputsHandler} />
          <input className='div' type="password" name="repeat_password" placeholder='Repeat password' onChange={inputsHandler} />
          <button className='div' onClick={submitButton}>Register</button>
          <p class="div"> Have an account? <Link to="/login">Click to Login</Link></p>
      </div>
    </div>
  );
}



            


export default RegisterForm;