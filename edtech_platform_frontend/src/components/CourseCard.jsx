import React from "react"
import { Link } from "react-router-dom";
import "../styles/App.css"


const CourseCard = (props) => {

    return (
        <Link className="course-card" to={`/courses/${props.id}`} >
            <div className="course-card-image">
                <img src={props.imgUrl}/>
            </div>
            <div className="course-card-title">
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>

        </Link>
    )
}

export default CourseCard;