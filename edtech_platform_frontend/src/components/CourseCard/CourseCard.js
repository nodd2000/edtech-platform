import React, { Component } from "react";
import "./CourseCard.css"


const CourseCard = (props) => {

    return (
        <div className="course-card">
            <a className="course-card-image" href={`/courses/${props.id}`}>
                <img src={props.img_url}/>
            </a>
            <div className="course-card-title">
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>

        </div>
    )
}

export default CourseCard;