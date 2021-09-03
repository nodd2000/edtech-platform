
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TeacherCard from '../components/TeacherCard/TeacherCard';


const Teacher = () => {
    let { id } = useParams();

    const [teacher, setTeacher] = useState({
        isLoaded: false,
        course: null
      });

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/teachers/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setTeacher({
            isLoaded: true,
            teacher: data})
          });
        
        }, []);


    if (!teacher.isLoaded) {
        return <div>Loading..</div>;
        }
        else {
        return (
            <div className='body'>
                <Header/>
                <TeacherCard id={teacher.teacher.id} bio={teacher.teacher.bio} img_url={teacher.teacher.img_url}/>
                <Footer/>
            </div>
            ); 
        }

}

export default Teacher;