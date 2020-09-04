import React from 'react';
import { sendMessage, updateNewMessageBody } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

/*const DialogsContainer = (props) => {
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
}*/
let mapStateToProps=(state)=>{
  return {
    dialogsPage: state.dialogsPage,
  }
};
// let mapDispatchToProps=(dispatch)=>{
//   return {
//     updateNewMessageBody: (body)=> {dispatch(updateNewMessageTextCreator(body))},
//     sendMessage: ()=>{dispatch(addMessageCreator())}
//   }
  
// }
const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody,sendMessage})(Dialogs);

export default DialogsContainer;
