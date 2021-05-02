import React from 'react';
import PostStyles from './Post.module.css'

const Post = () => {
    return (
        <div className={PostStyles.post}>
            <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" />
            post 1
            <div>
                <span>
                    Like
                </span>
            </div>
        </div>

    );
}

export default Post;