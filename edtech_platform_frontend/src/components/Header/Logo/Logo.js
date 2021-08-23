import React, { Component } from "react"
import "./Logo.css"

const NAME = 'learnO'

const Logo = () => {
  return (
      <div className="logo-container">
        <a className="logo" href='#'>
                { NAME }
        </a>
      </div>

  )
}

export default Logo;