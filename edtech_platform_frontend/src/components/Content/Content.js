import React, { Component } from "react";
import "./Content.css"
import CoursesField from './CoursesField/CoursesField';
import TeachersField from './TeachersField/TeachersField';



const Content = () => {
  return (
      <div className="content">
          <CoursesField />
          <TeachersField />
      </div>
  )
}

export default Content;