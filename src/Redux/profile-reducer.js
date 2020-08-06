const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message:'Hi, how are you?', likesCount: 11},
        {id: 2, message:'Love is love', likesCount: 11},
        {id: 3, message:'It\'s my second post', likesCount: 0},
        {id: 4, message:'It\'s my first post', likesCount: 22}
    ],
    newPostText: 'it-kamasutra',
};
const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount:0,
            };
            //TODO: поле ввода не очищается, узнать в чем причина и исправить
            //дело былов том, что не было заполненго вэлъю
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator =()=>({type:ADD_POST});
export const updateNewPostTextCreator =(text)=>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;