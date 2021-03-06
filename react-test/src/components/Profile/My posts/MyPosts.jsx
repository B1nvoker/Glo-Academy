import React, {createRef} from 'react';
import myPostsStyles from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => (<Post message={p.message} likeCounts={p.likes} imgUrl={p.imgUrl}/>))

    let newPostElement = createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={myPostsStyles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={myPostsStyles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;