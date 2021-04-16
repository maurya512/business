import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    // add state to add functionality to the sidebar menu
    // by default the side bar menu will be hidden
    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)
    // a function that toggles the menu when clicked
    const handleClick = () => setClick(!click)

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    {/* redirects the user to home page */}
                    <Link to='/' className='navbar-logo'>
                        <MdFingerprint className='navbar-icon' />
                    ESSNTL
                </Link>
                    {/* mobile menu */}
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links'>
                                Products
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                                </Link>
                                    ) : (
                                        <Link to='/sign-up' className='btn-link'>
                                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                            </Button>
                                        </Link>                                    )}
                        </li>
                    </ul>
                </div>
                </div>
        </>
    )
}

export default Navbar
