import React from 'react';
import './bannerleft.css';
import Button from '../../common/button/Button';


const BannerLeft = (props) => {
    return (
        <div className='banner-left-content'>
            <h2>Hello I'm</h2>
            <h1>{props.person.name}</h1>
            <h3>From <span>{props.person.country}</span> & I am a <span>{props.person.gui}</span></h3>
            <p className="short-description">{props.person.description}</p>

            <div className="bnr-btn">
                {/* <button>Get a Quote</button>
                <button>About me</button> */}
                <Button btnName={props.person.btnOne}></Button>
                <Button btnName={props.person.btnTow}></Button>
            </div>
        </div>
    );
};

export default BannerLeft;