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
            <Post message='Post 1' likeCounts='12'/>
            <Post message='Post 2' likeCounts='11'/>
            <Post message='Post 3' likeCounts='30'/>
            <Post message='Post 4' likeCounts='154'/>
            <Post message='Post 5' likeCounts='1'/>
        </div>
    );
}

export default MyPosts;