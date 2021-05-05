import React from 'react';
import myPostsStyles from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => (<Post message={p.message} likeCounts={p.likes}/>))


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