import React from 'react';

import "../styles/App.css"
import Emoji from './Emoji.jsx';


const BecomeTeacherButton = () => {

  const submitButton = () =>{
      console.log('become teacher')
  }

  return (
      <div className='button-zone'>
        <button className='role-button' onClick={submitButton}>
          <Emoji symbol="🧑‍🏫"/>
          <br/>
          Become a teacher! 
        </button>
      </div>
  );
}

export default BecomeTeacherButton;