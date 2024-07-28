import React from 'react';
import './experienceCard.css';

const ExperienceCard = (props) => {
    // console.log(props);
    return (
        <div className='exp-card'>
            <div className="date-market">
                <div className="date">
                    <p>{props.experienceItems.date}</p>
                </div>
                <div className="market">
                    <p>{props.experienceItems.market}</p>
                </div>
            </div>
            <h2>{props.experienceItems.heading}</h2>
            <p>{props.experienceItems.description}</p>
            <button onClick={() => props.handleAddService(props)}>Buy This Service</button>
            {/* <p>{props.services.length}</p> */}
        </div>
    );
};

export default ExperienceCard;