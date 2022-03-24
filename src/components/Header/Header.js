import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <a href="/hom">Home</a>
                <a href="/shop">Shop now</a>
                <a href="/about">About us</a>
            </div>
        </nav>
    );
};

export default Header;