import React from 'react';

import "../styles/App.css"
import Emoji from './Emoji.jsx';


const BecomeTeacherButton = ({ submit }) => {
  return (
      <button 
      className='role-button' 
      onClick={submit}>
        <Emoji symbol="🧑‍🏫"/>
        <br/>
        Become a teacher! 
      </button>
  );
}

export default BecomeTeacherButton;