const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}
const dialogsReducer =(state=initialState,  action)=>{
    switch (action.type){
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return {...state, newMessageBody: ' ', messagesData: [...state.messagesData, {id:6,message: body}] };
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            return {...state, newMessageBody: action.messageBody};
        }
        default: 
            return state;
    }
}
export const sendMessage =()=>({type: SEND_MESSAGE});
export const updateNewMessageBody =(body)=>
    ({type: UPDATE_NEW_MESSAGE_BODY, messageBody: body});

export default dialogsReducer;