import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem =(props)=>{
  return (
    <div className={s.dialog+ ' '+ s.active}>
          <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
  )
}

const Message =(props)=>{
  return (
    <div className={s.message}>
          {props.message}
        </div>
  )
}

const Dialogs = (props) => {
  let dialogsData = [
    {id: 1, name:'Dymich'},
    {id: 2, name:'Alena'},
    {id: 3, name:'Valera'},
    {id: 4, name:'Layla'},
    {id: 5, name:'Petr'},
    {id: 6, name:'Andrew'},
    {id: 7, name:'Violetta'},
  ]
  
  let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I cann\'t stop to codeing'},
    {id: 4, message: 'I can fly'},
    {id: 5, message: 'Yo'},
  ]

  let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = messagesData.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }        
      </div>
    </div>
  )
}
export default Dialogs;
