import "./Menu.css"
import React from "react";
import {useAuth} from '/var/app/src/components/useAuth.js'
import { Link } from "react-router-dom";


function AuthButton() {
  let auth = useAuth();
  
  return auth.user ? (
      <div>
          <div className="menu-link base-style" onClick={() => auth.signout()}>log Out</div>
      </div>
      
    ) : (
      <Link className="menu-link base-style" to="/login">log In</Link> 
  );
}


const Menu = () => {
  let auth = useAuth();

  return (
    <div className="menu">
      { auth.user ? <div className="menu-point"> {auth.user.username}</div> : <div></div>}

      <div className="menu-point">
          < AuthButton />
      </div>
    </div>
  )
}

export default Menu;