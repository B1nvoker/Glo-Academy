import React from 'react';
import navBarStyles from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={navBarStyles.navbar}>
            <div className={navBarStyles.item}>
                <NavLink to="/profile" activeClassName={navBarStyles.active}>Profile</NavLink>
            </div>
            <div className={navBarStyles.item}>
                <NavLink to="/dialogs" activeClassName={navBarStyles.active}>Message</NavLink>
            </div>
            <div className={navBarStyles.item}>
                <NavLink to="/news" activeClassName={navBarStyles.active}>News</NavLink>
            </div>
            <div className={navBarStyles.item}>
                <NavLink to="/music" activeClassName={navBarStyles.active}>Music</NavLink>
            </div>
            <div className={navBarStyles.item}>
                <NavLink to="/settings" activeClassName={navBarStyles.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;