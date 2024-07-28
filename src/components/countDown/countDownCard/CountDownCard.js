import React from 'react';
import './countDownCard.css';

const CountDownCard = (props) => {
    return (
        <div className="count-down-card">
            <h1>{props.countDownItems.countDownNumber}</h1>
            <h3>{props.countDownItems.heading}</h3>
        </div>
    );
};

export default CountDownCard;