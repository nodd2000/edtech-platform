import React, { Component } from "react"
import CourseCard from "../CourseCard/CourseCard";

class CoursesField extends Component {
    
    
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
              {
              courses.map
              (
                  course => 
                  <CourseCard title={course.title} description={course.description}/>
              )
              }
          </div>
          ); 
        }
      } 
    }

    export default CoursesField;