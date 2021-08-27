import React from "react"
import { Link } from "react-router-dom";
import "./Logo.css"
import "../Header.css"

const NAME = 'learnO'

const Logo = () => {
  return (
    <div className="logo-container">
      <Link className="logo base-style" to='/'> { NAME } </Link>
    </div>
  )
}

export default Logo;