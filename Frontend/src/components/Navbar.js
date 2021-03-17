import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import Dropdown from './Dropdown'
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setbutton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false);
        } else {
            setbutton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        STARTUP<i className="fab fa-staylinked"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link className="nav-links" onClick={closeMobileMenu}>
                                Products<i className="fas fa-caret-down" />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>SIGN UP
                       </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className="nav-links-mobile" onClick={closeMobileMenu}>LOGIN
                       </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
