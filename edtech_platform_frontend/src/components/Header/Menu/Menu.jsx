import "./Menu.css"
import React from "react"
import { useAuth } from '../../../auth/useAuth.jsx'
import { Link } from "react-router-dom"


function AuthButton() {
  const { user, signOut } = useAuth()
  
  return user ? ( 
      <div className="menu-link base-style" onClick={() => signOut()}>log Out</div> 
    ) : (
      <Link className="menu-link base-style" to="/login">log In</Link> 
  )
}


const Menu = () => {

  const { user } = useAuth()

  return (
    <div className="menu">
      { user ? <a className="menu-point" href='/self'> {user.username}</a> : <div></div> }
      <div className="menu-point">
          < AuthButton />
      </div>
    </div>
  )
}

export default Menu