import React from "react"
import CourseCard from "./CourseCard";
import '../styles/App.css';

function CoursesField( { courses=[], title='Courses' } ) {

  return (
    <div className='cards-field'>
      <div className='cards-field-title'>
        <h1>{title}</h1>
      </div>
      
      <div className='cards-field-scroll'>

        {courses.length == 0 ? 
        <>
        No courses
        </> : <>
          { courses.map(course => 
          <CourseCard 
          key={course.id} 
          id={course.id} 
          title={course.title} 
          img_url={course.img_url}/>) }
        </>}


      </div>
    </div>
    ); 
}

export default CoursesField;