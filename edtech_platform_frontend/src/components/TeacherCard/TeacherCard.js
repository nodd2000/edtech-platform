import React, { Component } from "react";
import "./TeacherCard.css"


const TeacherCard = (props) => {
    return (
        <div className="teacher-card">
            <a className="teacher-card-image" href={`/teachers/${props.id}`}>
                <img src={props.img_url}/>
            </a>
            <div className="teacher-card-title">
                <h4>{props.bio}</h4>
            </div>

        </div>
    )
}

export default TeacherCard;