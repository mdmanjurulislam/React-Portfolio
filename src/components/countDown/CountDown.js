import React from 'react';
import './countDown.css';
import CountDownCard from './countDownCard/CountDownCard';

const countDownItems = [
    {
        countDownNumber: '120+',
        heading: 'Digital Products'
    },
    {
        countDownNumber: '40+',
        heading: 'Open Source Projects'
    },
    {
        countDownNumber: '10M',
        heading: 'Lines of Code'

    }
]

const CountDown = () => {
    return (
        <div className='container'>
            <div className="count-down custom-margin">
                {
                    countDownItems.map(countItem =>
                        <CountDownCard countDownItems={countItem} key={countItem.heading}></CountDownCard>
                    )
                }
            </div>
        </div>
    );
};

export default CountDown;