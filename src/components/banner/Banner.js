import React from 'react';
import './banner.css'
import BannerLeft from './banner-left/BannerLeft';
import BannerRight from './banner-right/BannerRight';
import bannerImage from './images/my.jpg';

const person = {
    name :'Md. Manjurul Islam Sohag',
    country :'Bangladesh',
    gui : 'Frontend Developer',
    language :'JavaScript',
    img : bannerImage,//'../banner/images/my.jpg'
    description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, soluta aspernatur sint dolore ipsa eveniet ratione neque iure provident cupiditate, sequi quos consectetur accusamus quis. Illum reiciendis alias quidem necessitatibus.',
    btnOne :'Get a Quote',
    btnTow: 'About me'
} 

const Banner = (props) => {
    
    return (
        <div className='banner'>
            <div className="banner-content container">
                <div className="banner-left">
                    <BannerLeft person={person}></BannerLeft> 
                </div>
                <div className="banner-right">
                    <BannerRight person={person}></BannerRight>
                </div>
            </div>
        </div>
    );
};

export default Banner;