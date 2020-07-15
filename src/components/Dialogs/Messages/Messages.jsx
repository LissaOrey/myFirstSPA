import React from 'react';
import s from './../Dialogs.module.css';


const Message =(props)=>{
  return (
    <div className={s.message}>
      <img src='https://img3.goodfon.ru/original/2901x2289/c/c8/art-paren-vzglyad-maska-kostyum.jpg' alt='' />
      {props.message}
    </div>
  )
}

export default Message;
