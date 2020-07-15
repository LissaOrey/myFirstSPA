import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <div className={s.avatar}>
        <img src="https://www.ejin.ru/wp-content/uploads/2018/11/1-19.jpg" alt="avatar"/>
      </div>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
