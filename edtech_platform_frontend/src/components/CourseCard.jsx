import React from "react"
import "../styles/App.css"


const CourseCard = (props) => {

    return (
        <a className="course-card" href={`/courses/${props.id}`} >
            <a className="course-card-image" href={`/courses/${props.id}`}>
                <img src={props.img_url}/>
            </a>
            <div className="course-card-title">
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>

        </a>
    )
}

export default CourseCard;