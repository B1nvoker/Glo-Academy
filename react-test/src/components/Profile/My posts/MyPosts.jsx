import React from 'react';
import myPostsStyles from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {

    let posts = [
        {message: "Post 1", likes: 12},
        {message: "Post 2", likes: 123},
        {message: "Post 3", likes: 124},
        {message: "Post 4", likes: 125},
        {message: "Post 5", likes: 126}
    ];

    let postsElements = posts.map(p => (<Post message={p.message} likeCounts={p.likes}/>))


    return (
        <div className={myPostsStyles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={myPostsStyles.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;