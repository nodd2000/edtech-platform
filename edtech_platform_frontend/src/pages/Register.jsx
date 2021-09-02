import React, {useState} from 'react';

import RegisterForm from '../components/LoginScreen/RegisterForm/RegisterForm'

import "../styles/App.css"

const Register = () => {

  return (
    <div className='login-screen'>
      <RegisterForm />
    </div>
  );
}

export default Register;