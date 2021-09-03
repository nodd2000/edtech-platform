
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CourseCard from '../components/CourseCard/CourseCard';


const Course = () => {
    let { id } = useParams();

    const [course, setCourse] = useState({
        isLoaded: false,
        course: null
      });

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/courses/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCourse({
            isLoaded: true,
            course: data})
          });
        
        }, []);


    if (!course.isLoaded) {
        return <div>Loading..</div>;
        }
        else {
        return (
            <div className='body'>
                <Header/>
                <CourseCard id={course.course.id} title={course.course.title} description={course.course.description} img_url={course.course.img_url}/>
                <Footer/>
            </div>
            ); 
        }

}

export default Course;