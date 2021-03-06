import React from 'react';
import profileStyles from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.state.posts}
                     newPostText = {props.state.newPostText}
                     dispatch = {props.dispatch}/>
        </div>
    );
};

export default Profile;