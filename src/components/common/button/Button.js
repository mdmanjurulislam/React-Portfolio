import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <button className='commont-btn'>
            {props.btnName}
        </button>
    );
};

export default Button;