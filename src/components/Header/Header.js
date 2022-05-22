import React from 'react';
import CTA from './CTA';
import profile from '../../assets/profile-picture.png'
import Social from './Social';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mahmudur Rahman Salman</h1>
                <h5 className="text-light">
                    Front End Developer
                </h5>
                <CTA></CTA>
                <Social></Social>
                <div className="me">
                    <img src={profile} alt="profile picture" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;