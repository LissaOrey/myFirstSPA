import React from 'react';
import s from './../Dialogs.module.css';

const NewMessage = (props) => {
    let newMessage = React.createRef()
    let sendMessage = () => {
        // alert('hi');
        let action = {type: 'ADD-MESSAGE'};
        props.dispatch(action);
        // newMessage.current.value='';
    }
    let onMessageChange = () =>{
        let message = newMessage.current.value;
        let action ={type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message}
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