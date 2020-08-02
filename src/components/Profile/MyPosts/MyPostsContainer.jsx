import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostCreator();
        props.store.dispatch(action);
    }
    let onPostChange=(text)=>{
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }
    return (
        <MyPosts addPost={addPost} updateNewPostTextCreator={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    )
}
export default MyPostsContainer;