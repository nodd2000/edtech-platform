import React from "react"
import '../styles/App.css'
import { FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom"


export const NewCourseButton = ({title, href}) => {
    return (
        <Link className="add-course-card" to={href}>
          <div className="add-course" >
             <FaPlusCircle color="gray"/> 
          </div>
          <h3>{title}</h3>
        </Link>
    )
}

