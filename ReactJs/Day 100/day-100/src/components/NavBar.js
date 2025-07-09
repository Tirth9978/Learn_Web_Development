import React from 'react'
import Footer from './Footer'

function NavBar(props) {
  return (
    <div>
      <div className="logo">
        {props.logoText}
      </div>
      <ul>
        <li>Home</li>
        <li>About US</li>
        <li>Setting</li>
      </ul>
      <Footer />
    </div>
  )
}

export default NavBar
