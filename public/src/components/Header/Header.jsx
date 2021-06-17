import React from 'react';
import Headroom from 'react-headroom';
import './header.css'
// import src from '../../images/T.png'

const Header = () => (
    <Headroom>
        <header className="header">
            <a href="#" className="home-button">
                {/* <img className='logo' src={src}></img> */}
                Troy Dawson
            </a>
            <div className="right-buttons">
                <a href="#about" className='nav-button'>
                    About
                </a>
                <a href="#projects" className='nav-button'>
                    Projects
                </a>
                <a href="#contact" className='nav-button'>
                    Contact
                </a>
            </div>
        </header>
    </Headroom>
);

export default Header;
