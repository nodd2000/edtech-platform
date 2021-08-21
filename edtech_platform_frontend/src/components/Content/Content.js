import React, { Component } from "react";
import "./Content.css"
import CoursesField from './CoursesField/CoursesField';



const Content = () => {
  return (
      <div className="content">
          <CoursesField />
          {/* <TeachersField /> */}
      </div>
  )
}

export default Content;