import React from 'react'
import NavbarMenu from './navbar-menu'
import NavbarTop from './navbar-top'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="main-grid navbar-flex">
        <div className="overlay"></div>
        <NavbarTop {...props} />
        <NavbarMenu {...props} />
      </div>
    </div>
  )
}

export default Navbar
