
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginForm from './components/LoginScreen/LoginForm/LoginForm';
import RegisterForm from './components/LoginScreen/RegisterForm/RegisterForm';
import React, {useEffect, useState} from 'react';
import App from './App.js';

import {ProvideAuth, useAuth} from './components/useAuth.js'


function Main() {

  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>

        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default Main;
