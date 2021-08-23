import React, { Component } from "react";
import "./TeacherCard.css"


const TeacherCard = (props) => {
    return (
        <div className="teacher-card">
            <a className="teacher-card-image" href="#">
                <img src={props.img_url}/>
            </a>
            <div className="teacher-card-title">
                <h3>{props.id}</h3>
                <h4>{props.bio}</h4>
            </div>

        </div>
    )
}

export default TeacherCard;