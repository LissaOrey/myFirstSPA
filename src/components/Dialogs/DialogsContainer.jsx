import React from 'react';
// import { sendMessage, updateNewMessageBody } from '../../Redux/dialogs-reducer';
import { sendMessage } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps=(state)=>{
  return {
    dialogsPage: state.dialogsPage,
  }
};
export default compose (
  connect(mapStateToProps, {sendMessage}),
  WithAuthRedirect
)(Dialogs)
