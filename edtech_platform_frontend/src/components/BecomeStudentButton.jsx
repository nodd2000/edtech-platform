import React from 'react';

import "../styles/App.css"
import Emoji from './Emoji.jsx';


const BecomeStudentButton = ({ submit }) => {
  return (
      <button 
      className='role-button' 
      onClick={submit}>
        <Emoji symbol="🧑‍🎓"/>
        <br/>
        Become a student! 
      </button>
  );
}

export default BecomeStudentButton;