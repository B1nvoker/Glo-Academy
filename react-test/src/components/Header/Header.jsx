import React from 'react';
import headerStyle from './Header.module.css'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png'></img>
        </header>
    );
}

export default Header;