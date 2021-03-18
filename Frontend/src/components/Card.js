import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.png';
import Img3 from '../img/img5.png'
function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                            src={Img1}
                            text='Browse Posts'
                            path='/posts'
                        />
                        <CardItem
                            src={Img2}
                            text='Upload Posts'
                            path='/upload'
                        />
                        <CardItem
                            src={Img3}
                            text='Browse Jobs'
                            path='/FindJobs'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;