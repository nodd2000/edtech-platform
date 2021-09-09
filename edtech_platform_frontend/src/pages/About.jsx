import React from "react"
import '../styles/App.css'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'

function About() {

  return (
    <div className='body'>
      <Header/>
      <div className='course-page-content'>
      <h1 style={{margin:'20px'}}>About</h1>
      <div className='about-message-box'>
        <h3 style={{margin:'20px'}}>
          The first platform with learning courses based information from top leaders of industries,
          well-known scientists and artists. Discover original books, science magazines articles, 
          interviews and even tweets. Learn geometry by Euclid,
          quantum mechanics by Niels Bohr and Erwin Schrödinger, aerospace engineering by Elon Musk, 
          crypto by Satoshi Nakamoto and Vitalik Buterin and many others. 
        </h3>

      </div>

      </div>

      <Footer/>
    </div>
  )
}

export default About
