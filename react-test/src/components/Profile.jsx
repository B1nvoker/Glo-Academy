import React from 'react';
import profileStyles from './../stylesForModules/Profile.module.css'

const Profile = () => {
    return (
        <div className={profileStyles.content}>
            <div>
                <img src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg" />
            </div>
            <div>
                ava + descriptions
            </div>
            <div>
                My posts
                <div>post 1</div>
                <div>post 2</div>
            </div>

        </div>
    );
}

export default Profile;