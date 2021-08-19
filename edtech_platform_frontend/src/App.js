import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Courses from './components/courses/courses';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <Header/>
        <Courses/>
        <Footer/>
      </div>
    )
    } 
  }


function App() {
  return (
    <div className="App">
      <AppComponent/>
    </div>
  );
}

export default App;
