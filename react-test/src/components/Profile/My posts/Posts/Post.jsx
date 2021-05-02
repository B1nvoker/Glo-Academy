import React from 'react';
import PostStyles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={PostStyles.post}>
            <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"/>
            {props.message}
            <div>
                <span>
                    likes:
                </span> {props.likeCounts}
            </div>
        </div>
    );
}

export default Post;