import React from 'react';
import myPostsStyles from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={myPostsStyles.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Post 1' />
            <Post message='Post 2' />
            <Post message='Post 3' />
            <Post message='Post 4' />
            <Post message='Post 5' />
        </div>
    );
}

export default MyPosts;