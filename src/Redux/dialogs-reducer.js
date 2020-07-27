const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer =(state,  action)=>{
    switch (action.type){
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            /*let newMessage = {
                id:6,
                message: body,
            };*/
            //state.messagesData.push(newMessage);
            state.newMessageBody = ' ';
            state.messagesData.push({id:6,message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.messageBody;
            return state;
        default: 
            return state;
    }
}
export const addMessageCreator =()=>({type: SEND_MESSAGE});
export const updateNewMessageTextCreator =(body)=>
    ({type: UPDATE_NEW_MESSAGE_BODY, messageBody: body});

export default dialogsReducer;