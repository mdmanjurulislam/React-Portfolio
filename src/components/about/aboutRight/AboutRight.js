import React from 'react';
import './aboutRight.css';
import Button from '../../common/button/Button';

const AboutRight = (props) => {
    return (
        <div className='about-content'>
            <h3>{props.aboutContent.title}</h3>
            <h1>{props.aboutContent.heading}</h1>
            <p>{props.aboutContent.description}</p>
            <Button btnName={props.aboutContent.btnName}></Button>

        </div>
    );
};

export default AboutRight;