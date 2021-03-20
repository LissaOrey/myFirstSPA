import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Messages';
import { DialogMessageForm } from '../ReduxForms/DialogsMessageForm';

// import NewMessage from './Messages/NewMessage';

const Dialogs = (props) => {
  let state = props.dialogsPage;
//!при использовании мап нужно всегда добавлять кей

  let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messagesData.map(m => < Message message={m.message} key={m.id} />);

  let addMessage = (dataForm) => {
    props.sendMessage(dataForm.addMessageForm)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <DialogMessageForm onSubmit={addMessage} />
        {/* <NewMessage newMessageText={state.newMessageText} dispatch={props.dispatch} /> */}
        {/* <div>
          <div>
            <textarea placeholder='Enter your message' 
                      onChange={onNewMessageChange} 
                      value={newMessageText}  ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Dialogs;
