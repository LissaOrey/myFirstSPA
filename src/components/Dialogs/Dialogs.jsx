import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Messages';
import { reduxForm, Field } from 'redux-form';
// import NewMessage from './Messages/NewMessage';

const Dialogs = (props) => {
  let state = props.dialogsPage;

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
        <DialogMessageReduxForm onSubmit={addMessage} />
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
const addMessageForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder='Enter your text' name='addMessageForm' component='textarea' />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  </div>
}
export const DialogMessageReduxForm = reduxForm({ form: 'addMessageForm' })(addMessageForm)
export default Dialogs;
