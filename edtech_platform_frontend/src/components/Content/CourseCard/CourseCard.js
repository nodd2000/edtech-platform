import React, { Component } from "react";
import "./CourseCard.css"


const CourseCard = (props) => {
    return (
        <div className="course-card">
            <div className='image-container'>
                <img src={props.img_url}/>
            </div>
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
        </div>
    )
}

export default CourseCard;