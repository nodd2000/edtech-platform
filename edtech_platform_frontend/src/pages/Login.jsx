import React, {useState} from 'react';

import LoginForm from '../components/LoginScreen/LoginForm/LoginForm'

import "../styles/App.css"

const Login = () => {

  return (
    <div className='login-screen'>
      <LoginForm />
    </div>
  );
}

export default Login;