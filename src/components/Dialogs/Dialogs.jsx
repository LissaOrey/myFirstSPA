import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Messages';
// import { Redirect } from 'react-router-dom';
// import NewMessage from './Messages/NewMessage';
import { addMessageCreator, updateNewMessageTextCreator } from '../../Redux/dialogs-reducer';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
 
  let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messagesData.map(m => < Message message={m.message} />);

  let newMessageText = state.newMessageBody;
  let onNewMessageChange =(e)=>{
    // мы пытаемся избегать ref, поэтому исп такой метод
    let body = e.target.value;
    // let action = updateNewMessageTextCreator(message);
    // props.store.dispatch(action);
    props.store.dispatch(updateNewMessageTextCreator(body));
  }
  let onSendMessageClick =()=>{
    // let action = addMessageCreator();
    // props.store.dispatch(action);
    props.store.dispatch(addMessageCreator());
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
            <textarea onChange={onNewMessageChange} value={newMessageText} placeholder='Enter your message'></textarea>
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
