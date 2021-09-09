import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';


const TeacherCard = (props) => {
    return (
        <div className="teacher-card">
            <Link className="teacher-card-image" to={`/teachers/${props.id}`}>
                <img src={props.imgUrl}/>
            </Link>
            <div className="teacher-card-title">
                <h4>{props.name}</h4>
                <h4>{props.bio}</h4>
            </div>

        </div>
    )
}

export default TeacherCard;