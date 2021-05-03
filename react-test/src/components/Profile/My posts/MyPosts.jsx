import React from 'react';
import myPostsStyles from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {

    let postData = [
        {message: "Post 1", likes: 12},
        {message: "Post 2", likes: 123},
        {message: "Post 3", likes: 124},
        {message: "Post 4", likes: 125},
        {message: "Post 5", likes: 126}
    ];

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
                <Post message={postData[0].message} likeCounts={postData[0].likes}/>
                <Post message={postData[1].message} likeCounts={postData[1].likes}/>
                <Post message={postData[2].message} likeCounts={postData[2].likes}/>
                <Post message={postData[3].message} likeCounts={postData[3].likes}/>
                <Post message={postData[4].message} likeCounts={postData[4].likes}/>
            </div>

        </div>
    );
}

export default MyPosts;