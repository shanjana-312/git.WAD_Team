import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                            src='img/img1.jpg'
                            text='Browse Posts'
                            path='/posts'
                        />
                        <CardItem
                            src='img/img2.png'
                            text='Upload Posts'
                            path='/upload'
                        />
                        <CardItem
                            src='img/img5.png'
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