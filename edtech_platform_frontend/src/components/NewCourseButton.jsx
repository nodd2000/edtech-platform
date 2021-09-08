import React from "react"
import '../styles/App.css'
import { FaPlusCircle } from "react-icons/fa"


export const NewCourseButton = ({title, href}) => {
    return (
        <a className="add-course-card" href={href}>
          <div className="add-course" >
             <FaPlusCircle color="gray"/> 
          </div>
          <h3>{title}</h3>
        </a>
    )
}

