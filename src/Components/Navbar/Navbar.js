import React from 'react'
import logo from '../../Images/download.jfif'
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <img className='brand-logo' src={logo} alt="logo" />
        </nav>
    )
}
export default Navbar;