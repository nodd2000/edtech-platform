import React, { useEffect, useState } from "react"
import TeacherCard from "../TeacherCard/TeacherCard";
import '../../styles/App.css';


function TeachersField() {
  const [teachers, setTeachers] = useState({
    isLoaded: false,
    teachers: []
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/teachers/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setTeachers({
        isLoaded: true,
        teachers: data})
      });
    }, []);
  
  if (!teachers.isLoaded) {
    return <div>Loading..</div>;
  }
  else {
    return (
      <div className='cards-field'>
        <div className='cards-field-title'>
          <h1>Teachers</h1>
        </div>
        
        <div className='cards-field-scroll'>
          {teachers.teachers.map
          (teacher => <TeacherCard name={teacher.id} bio={teacher.bio} img_url={teacher.img_url}/>)}
        </div>
      </div>
      ); 
    }
  }

export default TeachersField;