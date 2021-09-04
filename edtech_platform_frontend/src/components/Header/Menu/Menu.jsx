import "./Menu.css"
import React from "react";
import {useAuth} from '../../../auth/useAuth'
import { Link } from "react-router-dom";


function AuthButton() {
  let auth = useAuth();
  
  return auth.user ? ( 
      <div className="menu-link base-style" onClick={() => auth.signout()}>log Out</div> 
    ) : (
      <Link className="menu-link base-style" to="/login">log In</Link> 
  );
}


const Menu = () => {
  let auth = useAuth();

  return (
    <div className="menu">
      { auth.user ? <a className="menu-point" href='/self'> {auth.user.username}</a> : <div></div> }
      <div className="menu-point">
          < AuthButton />
      </div>
    </div>
  )
}

export default Menu;