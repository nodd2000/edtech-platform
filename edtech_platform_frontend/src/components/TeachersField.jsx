import React from "react"
import TeacherCard from "./TeacherCard"
import '../styles/App.css'

function TeachersField( { teachers=[], title='Teachers', add=false } ) {
  
  return (
    <div className='cards-field'>
      <div className='cards-field-title'>
        <h1>{title}</h1>
      </div>
      
      <div className='cards-field-scroll'>

        {teachers.length == 0 ? <> </> : 
          <>
            { teachers.map(teacher => 
            <TeacherCard 
            key={teacher.id} 
            id={teacher.id}
            name={teacher.username} 
            imgUrl={teacher.imgUrl}/>) }
          </>}

      </div>
    </div>
    ); 
  }

export default TeachersField;