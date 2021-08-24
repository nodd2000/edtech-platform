import React, { Component } from "react"
import CourseCard from "../CourseCard/CourseCard";
import "../Content.css"

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
          <div className='cards-field'>
            <div className='cards-field-title'>
              <h1>Courses</h1>
            </div>
            
            <div className='cards-field-scroll'>
              { courses.map
              (course => <CourseCard 
                title={course.title} 
                description={course.description}
                img_url={course.img_url}/>) }
            </div>
          </div>
          ); 
        }
      } 
    }

    export default CoursesField;