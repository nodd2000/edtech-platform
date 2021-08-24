import React, { Component } from "react"
import "./Logo.css"
import "../Header.css"

const NAME = 'learnO'

const Logo = () => {
  return (
      <div className="logo-container">
        <a className="logo base-style" href='#'>
                { NAME }
        </a>
      </div>

  )
}

export default Logo;