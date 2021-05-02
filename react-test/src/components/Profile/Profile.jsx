import React from 'react';
import profileStyles from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div className={profileStyles.content}>
            <div>
                <img src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg" />
            </div>
            <div>
                ava + descriptions
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;