import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

export default function Button2() {
    return (
        <Link to='sign-up'>
            <button id="btn2" className='btn' ><i className="fas fa-user"></i>Sign Up</button>

        </Link>
    );
}