import React from 'react';
import favoriteFriendsStyle from './FavoriteFriends.module.css'
import FavoriteFriend from "./FavoriteFriend/FavoriteFriend";

const FavoriteFriends = (props) => {

    let friendsElements = props.friends.map(p => (<FavoriteFriend name={p.name} avaUrl={p.avaUrl}/>))

    return (
        <div className={favoriteFriendsStyle.favoriteFriends}>
            {friendsElements}
        </div>

    );
}

export default FavoriteFriends;