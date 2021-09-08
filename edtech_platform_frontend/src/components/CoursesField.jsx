import React from "react"
import CourseCard from "./CourseCard"
import '../styles/App.css'
import { NewCourseButton } from "./NewCourseButton";

function CoursesField( { courses=[], title='Courses', buttonTitle, buttonHref, add=false } ) {

  return (
    <div className='cards-field'>
      <div className='cards-field-title'>
        <h1>{title}</h1>
      </div>
      
      <div className='cards-field-scroll'>

        {courses.length == 0 ? <> </> :
         <>
          { courses.map(course => 
          <CourseCard 
          key={course.id} 
          id={course.id} 
          title={course.title} 
          imgUrl={course.imgUrl}/>) }
        </>}

        { !add ? <></> :
            <NewCourseButton title={buttonTitle} href={buttonHref}/>
          }


      </div>
    </div>
    ); 
}

export default CoursesField;