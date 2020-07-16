import React from 'react';
import s from './../Dialogs.module.css';

const NewMessage = (props) => {
    let newMessage = React.createRef()
    let sendMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }
    return (
        <div>
            <textarea ref={newMessage}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}
export default NewMessage;