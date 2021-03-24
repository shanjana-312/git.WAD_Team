import React from 'react';
import './Aboutpage.css';
import A from '../img/A.jpg'
function Aboutpage(){
    
    return(
        <div class="about">
            <ul class="flex-container">
                <li class="aboutus">
                    <h1>About Us</h1>
                    <p>Our team provides a platform for young entrepreneurs to showcase their product and attract audience who might be interested in what they can offer.</p>
                </li>
                <li class="aboutuspic">
                    <img
                        src={A}
                        alt='pic'
                    />
                </li>
             
            </ul>
            <ul class="flex-container2">
                <li class="flex-item2">
                    <i class="icon far fa-check-circle fa-3x"></i>
                    <h3>Easy to use.</h3>
                    <p>All components are well explainedand known.</p>
                </li>
                <li class="flex-item2">
                    <i class="icon fas fa-arrow-up fa-3x"></i>
                    <h3>Grow your buisness</h3>
                    <p>Reach exponential heights with your buisness.</p>
                </li>
                <li class="flex-item2">
                    <i class="icon fas fa-dollar-sign fa-3x"></i>
                    <h3>Get additional support</h3>
                    <p>Need extra help? Our funds section have you covered</p>
                </li>
            </ul>
        </div>
        
        
    );
}
export default Aboutpage;
