import React from 'react';
import profileInfoStyles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={profileInfoStyles.profileInfo}>
            <div>
                <img src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg"/>
            </div>
            <div className={profileInfoStyles.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    );
}

export default ProfileInfo;