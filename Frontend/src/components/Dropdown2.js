import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems2 } from './MenuItems2';
import './Dropdown2.css'
function Dropdown2() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown2-menu clicked' : 'dropdown2-menu'}>
                {MenuItems2.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default Dropdown2
