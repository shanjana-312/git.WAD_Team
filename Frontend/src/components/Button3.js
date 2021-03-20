import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

export function Button3() {
    return (
        <Link to='login'>
            <button className='btn'>LogIn</button>
        </Link>
    );
}