import React from 'react';
import './bannerRight.css';

const BannerRight = (props) => {
    return (
        <div className='banner-right-img'>
            <img src={props.person.img} alt="Manjurul's" />
        </div>
    );
};

export default BannerRight;