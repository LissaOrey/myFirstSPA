import React from 'react';
import s from './../Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/State';

const NewMessage = (props) => {
    let newMessage = React.createRef()
    let sendMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }
    let onMessageChange = () =>{
        let message = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(message)
        props.dispatch(action);
    }
    return (
        <div>
            <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}
export default NewMessage;