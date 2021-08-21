import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='body'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
    } 
  }


function App() {
  return <AppComponent/>
}

export default App;
