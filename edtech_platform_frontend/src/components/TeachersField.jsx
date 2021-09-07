import React from "react"
import TeacherCard from "./TeacherCard";
import '../styles/App.css';


function TeachersField( { teachers=[], title='Teachers' } ) {
  
  return (
    <div className='cards-field'>
      <div className='cards-field-title'>
        <h1>{title}</h1>
      </div>
      
      <div className='cards-field-scroll'>


        {teachers.length == 0 ? 
          <>
          No teachers
          </> : <>
            { teachers.map(teacher => 
            <TeacherCard 
            key={teacher.id} 
            id={teacher.id}
            name={teacher.username} 
            img_url={teacher.img_url}/>) }
          </>}

      </div>
    </div>
    ); 
  }

export default TeachersField;