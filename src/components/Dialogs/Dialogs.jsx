import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Messages';
// import NewMessage from './Messages/NewMessage';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messagesData.map(m => < Message message={m.message} key={m.id} />);

  let newMessageText = state.newMessageBody;

  let onNewMessageChange =(e)=>{
    // мы пытаемся избегать ref, поэтому исп такой метод
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  let onSendMessageClick =()=>{
    props.sendMessage();
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        {messagesElements}
        {/* <NewMessage newMessageText={state.newMessageText} dispatch={props.dispatch} /> */}
        <div>
          <div>
            <textarea placeholder='Enter your message' 
                      onChange={onNewMessageChange} 
                      value={newMessageText}  ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
