import React, { Component } from "react"
import "./Header.css"
import Logo from "./Logo/Logo"


const Header = () => {
  return (
      <header className="header">
        <div className="content-header">
          <div className="limit-header">
            <Logo />
          </div>
        </div>
      </header>
  )
}

  export default Header;