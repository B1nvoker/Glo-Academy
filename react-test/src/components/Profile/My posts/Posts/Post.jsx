import React from 'react';
import PostStyles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={PostStyles.post}>
            <img src={props.imgUrl}/>
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