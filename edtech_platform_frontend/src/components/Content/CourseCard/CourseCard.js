import React, { Component } from "react";
import "./CourseCard.css"


const CourseCard = (props) => {
    return (
        <div className="course-card">
            <p>Title: {props.title}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default CourseCard;