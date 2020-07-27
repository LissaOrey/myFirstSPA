const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _callSubscriber() {
        console.log('state changed');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message:'Hi, how are you?', likesCount: 11},
                {id: 2, message:'Love is love', likesCount: 11},
                {id: 3, message:'It\'s my second post', likesCount: 0},
                {id: 4, message:'It\'s my first post', likesCount: 22}
            ],
            newPostText: ' ',
        },
        dialogsPage:{
            dialogsData: [
                {id: 1, name:'Dymich'},
                {id: 2, name:'Alena'},
                {id: 3, name:'Valera'},
                {id: 4, name:'Layla'},
                {id: 5, name:'Petr'},
                {id: 6, name:'Andrew'},
                {id: 7, name:'Violetta'},
            ],
              
            messagesData: [
                {id: 1, message: 'Hi!'},
                // {id: 6, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                // {id: 7, message: 'ok!'},
                {id: 3, message: 'I cann\'t stop to codeing'},
                // {id: 8, message: 'me too'},
                {id: 4, message: 'I can fly'},
                // {id: 9, message: 'cool'},
                {id: 5, message: 'Yo!'},
                // {id: 10, message: 'Yoyoyo'},
            ],
            newMessageBody: ' ',
        },
        sidebar: {
            friends:[
                {id: 1, name:'Valeria', src:'https://i.pinimg.com/736x/9f/0d/b5/9f0db5a67d450dd856264cee21156783.jpg',},
                {id: 2, name: 'Sergey', src:'https://avatars.mds.yandex.net/get-pdb/2732355/275a9f98-3ec4-4e53-ae34-f087f24eaba9/s1200?webp=false',},
                {id: 3, name: 'Anna', src:'https://i.pinimg.com/736x/1e/15/a9/1e15a966bac1e6a21b7871e0858bbfd5--manga-boy-manga-anime.jpg',},
                {id: 4, name: 'Olga', src:'https://i.pinimg.com/736x/27/31/a1/2731a1ec61c9c802985ff204e2975e61.jpg',},
            ],
        }
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount:0,
            };
            this._state.profilePage.newPostText = '';
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            /*let newMessage = {
                id:6,
                message: body,
            };*/
            // this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id:6,message: body});
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.messageBody;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostCreator =()=>({type:ADD_POST});
export const updateNewPostTextCreator =(text)=>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageCreator =()=>({type: SEND_MESSAGE});
export const updateNewMessageTextCreator =(body)=>
    ({type: UPDATE_NEW_MESSAGE_BODY, messageBody: body});

export default store;
window.store = store;