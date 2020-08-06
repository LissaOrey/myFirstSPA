import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

/*const MyPostsContainer = (props) => {
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
}*/
const mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};
const mapDispatchToProps =(dispatch)=>{
    return{
        addPost: ()=>{
            // let action = addPostCreator();
            dispatch(addPostCreator());
        },
        updateNewPostText: (text)=>{
            // let action =updateNewPostTextCreator(text) ;
            dispatch(updateNewPostTextCreator(text));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;