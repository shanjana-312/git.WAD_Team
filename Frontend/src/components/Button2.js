import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

export function Button2() {
    return (
        <Link to='sign-up'>
            <button className='btn'>SignUp</button>
        </Link>
    );
}