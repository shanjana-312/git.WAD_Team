import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import background from '../img/background.jpeg'
function HeroSection() {
    return (
        <div className="hero-container" style={{ backgroundImage: `url(${background})` }}>
            <p>
                A stepping stone in the form of a platform exclusively designed for startups focusing on one's professional and personal development in this competitive uprising economy
            </p>
            <h2>START EXPLORING</h2>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
