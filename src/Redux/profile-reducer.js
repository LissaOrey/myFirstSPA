import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message:'Hi, how are you?', likesCount: 11},
        {id: 2, message:'Love is love', likesCount: 11},
        {id: 3, message:'It\'s my second post', likesCount: 0},
        {id: 4, message:'It\'s my first post', likesCount: 22}
    ],
    newPostText: 'it-kamasutra',
    profile: null,
};
const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount:0,
            };
            //TODO: поле ввода не очищается, узнать в чем причина и исправить
            // дело былов том, что не было заполненго вэлъю
            return {...state, newPostText: '', posts: [...state.posts, newPost] };
        };
        case UPDATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.newText}
        };
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostCreator =()=>({type:ADD_POST});
export const updateNewPostTextCreator =(text)=>({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile =(profile)=>({type: SET_USER_PROFILE, profile});

export const getUserProfile =(userId)=>{
    return (dispatch)=>{
        // let userId = this.props.match.params.userId;
        // if(!userId){
            // userId = '2'
        // }
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export default profileReducer;