import React from 'react';
import AboutLeft from './aboutLeft/AboutLeft';
import AboutRight from './aboutRight/AboutRight';
import './about.css';

const aboutContent =
    {
        title : 'I am a Developer',
        heading :'I Develope Application that Help People',
        description : 'Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis',
        btnName:'View Portfolio',
    }

const About = () => {
    return (
        <div className='container'>
            <div className="about-container custom-margin">
                <AboutLeft></AboutLeft>
                <AboutRight aboutContent={aboutContent}></AboutRight>
            </div>
        </div>
    );
};

export default About;