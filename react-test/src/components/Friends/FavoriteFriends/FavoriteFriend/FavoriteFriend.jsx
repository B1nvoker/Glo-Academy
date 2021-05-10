import React from 'react';
import favoriteFriendStyle from './FavoriteFriend.module.css'

const FavoriteFriend = (props) => {

    return (
        <div className={favoriteFriendStyle.favoriteFriends}>
            <img src={props.avaUrl}/>
            <div className={favoriteFriendStyle.item}>{props.name}</div>
        </div>

    );
}

export default FavoriteFriend;