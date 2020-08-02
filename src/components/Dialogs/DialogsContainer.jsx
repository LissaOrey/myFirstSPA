import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  
  let state = props.store.getState().dialogsPage;
  let onNewMessageChange =(body)=>{
    // let action = updateNewMessageTextCreator(message);
    // props.store.dispatch(action);
    props.store.dispatch(updateNewMessageTextCreator(body));
  }
  let onSendMessageClick =()=>{
    // let action = addMessageCreator();
    // props.store.dispatch(action);
    props.store.dispatch(addMessageCreator());
  }
  return <Dialogs addMessageCreator={onSendMessageClick} updateNewMessageTextCreator={onNewMessageChange} dialogsPage={state} /> 
}

export default DialogsContainer;
