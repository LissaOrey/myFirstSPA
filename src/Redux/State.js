import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newPostText: 'it-kamasutra',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }  
}

export default store;
window.store = store;