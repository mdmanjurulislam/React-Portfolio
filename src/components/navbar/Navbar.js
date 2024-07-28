import React from 'react';
import './navbar.css';

const navItems = [
    { item: 'Home' },
    { item: 'Service' },
    { item: 'About us' },
    { item: 'Portfolio' },
    { item: 'Blog' },
    { item: 'Contact us' },
    { item: 'Download CV' },
]

const Navbar = () => {
    return (
        <div >
            <div className="nav-menu">
                <ul className='container'>
                    {
                        navItems.map(navItem =>
                            <li  key={navItem.item}>
                                <a href={"/" + navItem.item}>{navItem.item}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;