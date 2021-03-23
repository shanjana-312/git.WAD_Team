import React, { useState } from 'react';
import Button2 from './Button2';
import { Button3 } from './Button3';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [input, setInput] = useState('');
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown1(true);
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(false);
        }
    };

    const onMouseEnter1 = () => {
        setDropdown2(true);

    }

    const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <i class='fab fa-staylinked' />TARTUP CLUB
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-home"></i> Home
            </Link>
                    </li>
                    <li
                        className='nav-item'
                    >
                        <Link
                            to="/about"
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="fas fa-address-card"></i>About
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="far fa-window-restore"></i> Browse<i className='fas fa-caret-down' />
                        </Link> {dropdown1 && <Dropdown />}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter1}
                        onMouseLeave={onMouseLeave1}
                    >
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="fas fa-question"></i>Support<i className='fas fa-caret-down' />
                        </Link>{dropdown2 && <Dropdown2 />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-user-edit"></i> Experience
            </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
            </Link>
                    </li>
                    <li>
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Log in
            </Link>
                    </li>
                </ul>
                <form>
                    <div className="searchContainer">
                        <input type="search" className="search" name="name" placeholder="Search..." />
                        <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
                <div className="btn1"><Button2 /></div>
                <div className="btn1"><Button3 /></div>
            </nav>
        </>
    );
}

export default Navbar;