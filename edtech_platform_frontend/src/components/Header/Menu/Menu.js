import React from "react"
import { Link } from "react-router-dom";
import "./Menu.css"


const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-point">
          <Link className="menu-link base-style" to="/login">log In</Link>
      </div>
    </div>
  )
}

export default Menu;