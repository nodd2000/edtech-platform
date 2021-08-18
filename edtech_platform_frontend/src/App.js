import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';


class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      courses: []
    };
  }

  componentDidMount() {
      fetch('http://127.0.0.1:8000/api/courses/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(
          {
            isLoaded: true,
            courses: data
          }
        )
    });
  }

  render() {
    const { courses, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    }
    else {
      return (
        <div>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                {course.title} -  {course.description}
              </li>
            ))}
          </ul>
        </div>
        ); 
      }
    } 
  }


function App() {
  return (
    <div className="App">
      <Courses/>
    </div>
  );
}

export default App;
