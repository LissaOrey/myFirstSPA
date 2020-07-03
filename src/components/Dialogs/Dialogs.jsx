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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name='Dymich' id='1' />
        <DialogItem name='Alena' id='2' />
        <DialogItem name='Valera' id='3' />
        <DialogItem name='Layla' id='4' />
        <DialogItem name='Petr' id='5' />
        <DialogItem name='Andrew' id='6' />
        <DialogItem name='Violetta' id='7' />
      </div>
      <div className={s.messages}>
        <Message message='Hi!' />
        <Message message='How are you?' />
        <Message message="I cann't stop to codeing" />
        <Message message="I can fly" />
        <Message message="Yo" />
        
      </div>
    </div>
  )
}
export default Dialogs;
