import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./LoginScreen.css"
import LoginForm from "./LoginForm/LoginForm"
import RegisterForm from "./RegisterForm/RegisterForm"

const LoginScreen = () => {
  return (
    <Router>
      <Switch>
      <div className='login-screen'>
        <Route path="/login">
        <LoginForm />
        </Route>

        <Route path="/register">
          <RegisterForm />
        </Route>
        </div>
      </Switch>
    </Router>





        
      
  )
}

export default LoginScreen;