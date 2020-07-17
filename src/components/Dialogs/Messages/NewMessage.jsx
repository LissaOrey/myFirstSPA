import React from 'react';
import s from './../Dialogs.module.css';

const NewMessage = (props) => {
    let newMessage = React.createRef()
    let sendMessage = () => {
        // alert('hi');
        props.addMessage();
        // newMessage.current.value='';
    }
    let onMessageChange = () =>{
        let message = newMessage.current.value;
        props.updateNewMessageText(message);
    }
    return (
        <div>
            <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}
export default NewMessage;