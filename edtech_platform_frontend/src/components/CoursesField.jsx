import React, { useEffect, useState } from "react"
import CourseCard from "./CourseCard";
import '../styles/App.css';

function CoursesField() {
  const [courses, setCourses] = useState({
    isLoaded: false,
    courses: []
  });
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCourses({
        isLoaded: true,
        courses:data})
      });
    }, []);


  if (!courses.isLoaded) {
    return <div>Loading..</div>;
  }
  else {
    return (
      <div className='cards-field'>
        <div className='cards-field-title'>
          <h1>Courses</h1>
        </div>
        
        <div className='cards-field-scroll'>
          { courses.courses.map
          (course => <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} img_url={course.img_url}/>) }
        </div>
      </div>
      ); 
    }
}

export default CoursesField;