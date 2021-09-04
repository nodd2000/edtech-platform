import React from 'react';

import "../styles/App.css"
import Emoji from './Emoji.jsx';


const BecomeStudentButton = () => {

  const submitButton = () =>{
      console.log('become student')
  }

  return (
      <div className='button-zone'>
        <button className='role-button' onClick={submitButton}>
          <Emoji symbol="🧑‍🎓"/>
          <br/>
          Become a student! 
        </button>
      </div>
  );
}

export default BecomeStudentButton;