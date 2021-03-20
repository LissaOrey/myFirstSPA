import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostForm } from '../../ReduxForms/PostForm';

const MyPosts = (props) => {
    //!при использовании мап нужно всегда добавлять кей
    let postsElements = 
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />
        )
    
    let adddPost =(dataForm)=>{
        props.addPost(dataForm.addPost)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostForm onSubmit={adddPost} /> 
                {/* <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={OnAddPost} >Add post</button>
                </div> */}
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;