import React from 'react';
import navBarStyles from './../stylesForModules/NavBar.module.css'

const NavBar = () => {
    return (
        <nav className = {navBarStyles.navbar}>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Message</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;