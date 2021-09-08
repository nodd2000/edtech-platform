import React from "react";
import '../styles/App.css';


const TeacherCard = (props) => {
    return (
        <div className="teacher-card">
            <a className="teacher-card-image" href={`/teachers/${props.id}`}>
                <img src={props.imgUrl}/>
            </a>
            <div className="teacher-card-title">
                <h4>{props.name}</h4>
                <h4>{props.bio}</h4>
            </div>

        </div>
    )
}

export default TeacherCard;