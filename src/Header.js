import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom'

function Header() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)

    }
    return (
        <div className='header'>
            <div className='header__navbar'>
                <div className='header__top'>
                    <Link to='/'>
                        <h1 className='logo'>C</h1>
                        <h2>Chandu</h2>
                    </Link>
                    <span>Web Developer</span>
                </div>
                <div className={click ? "header__nav active" : "header__nav"}>
                    <Link to='/about'>
                        About
                    </Link>
                    <Link to='/skills'>
                        Skills
                    </Link>
                    <Link to='/education'>
                        Education
                    </Link>
                    <Link to='/work'>
                        Work
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="mobile-menu">
                {click ? (
                    <CloseIcon className="menu-icon" onClick={handleClick} />
                ) : (
                    <MenuIcon className="menu-icon" onClick={handleClick} />
                )}
            </div>

        </div>
    )
}

export default Header
