import React from "react" 
import { Link } from "react-router-dom"
import '../styles/App.css'

function Footer() {
  return (
  <footer className="footer">
    <div>Learn the Origin 2021</div>
    <span>
    <Link className='footer-link' to='/about'>About us</Link>
    <Link className='footer-link' to='/contacts'>Contact us</Link>

    </span>

  </footer>
  )
}

  export default Footer;