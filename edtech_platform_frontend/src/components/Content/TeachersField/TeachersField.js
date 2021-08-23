import React, { Component } from "react"
import TeacherCard from "../TeacherCard/TeacherCard";
import "../Content.css"

class TeachersField extends Component {
    
    
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        teachers: []
      };
    }
    
  
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/teachers/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState(
            {
              isLoaded: true,
              teachers: data
            }
          )
        
      });
    }
  
    render() {
      const { teachers, isLoaded } = this.state;
      
      if (!isLoaded) {
        return <div>Loading..</div>;
      }
      else {
        return (
          <div className='cards-field'>
            <h1>Teachers</h1>
            <div className='cards-field-scroll'>
              {teachers.map
              (teacher => <TeacherCard name={teacher.id} bio={teacher.bio} img_url={teacher.img_url}/>)}
            </div>
          </div>
          ); 
        }
      } 
    }

    export default TeachersField;