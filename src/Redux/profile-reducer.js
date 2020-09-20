import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message:'Hi, how are you?', likesCount: 11},
        {id: 2, message:'Love is love', likesCount: 11},
        {id: 3, message:'It\'s my second post', likesCount: 0},
        {id: 4, message:'It\'s my first post', likesCount: 22}
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ''
};
const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id:5,
                // message: state.newPostText,
                message: action.newPostText,
                likesCount:0,
            };
            //TODO: поле ввода не очищается, узнать в чем причина и исправить
            // дело былов том, что не было заполненго вэлъю
            return {...state, newPostText: '', posts: [...state.posts, newPost] };
        };
        // case UPDATE_NEW_POST_TEXT:{
        //     return {...state, newPostText: action.newText}
        // };
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPost =(newPostText)=>({type:ADD_POST,newPostText });
// export const updateNewPostTextCreator =(text)=>({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile =(profile)=>({type: SET_USER_PROFILE, profile});
export const setStatus =(status)=>({type: SET_STATUS, status});

export const getUserProfile =(userId)=>(dispatch)=>{
    // return (dispatch)=>{
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    // }
}
export const getStatus =(userId)=>(dispatch)=>{
    // return (dispatch)=>{
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    // }
}
export const updateStatus =(status)=>(dispatch)=>{
    // return (dispatch)=>{
        profileAPI.updateStatus(status).then(response => {
            // debugger
            if(response.data.resultCode === 0){
                console.log("Status", response.data)
                dispatch(setStatus(status));
            }
        })
    // }
}

export default profileReducer;