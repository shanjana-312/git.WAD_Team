import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

export function Button3() {
    return (
        <Link to='/login'>
            <button id="btn3" className='btn'><i className="fas fa-sign-in-alt"></i>Log In</button>
        </Link>
    );
}