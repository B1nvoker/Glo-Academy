import React from 'react';
import navBarStyles from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import FavoriteFriends from "../Friends/FavoriteFriends/FavoriteFriends";
import Post from "../Profile/My posts/Posts/Post";

const NavBar = (props) => {

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
            <div className={navBarStyles.itemSettings}>
                <NavLink to="/settings" activeClassName={navBarStyles.active}>Settings</NavLink>
            </div>
            <div className={navBarStyles.itemFriends}>
                <NavLink to="/friends" activeClassName={navBarStyles.active}>Friends</NavLink>
                <FavoriteFriends friends={props.state.favoriteFriends}/>
            </div>
        </nav>
    );
}

export default NavBar;