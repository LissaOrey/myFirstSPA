import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      {/* <div className={s.ageName}>Dialogs</div> */}
      <div className={s.dialogItems}>
        <div className={s.dialog+ ' '+ s.active}>
          Dymich
        </div>
        <div className={s.dialog}>
          Alena
        </div>
        <div className={s.dialog}>
          Valera
        </div>
        <div className={s.dialog}>
          Layla
        </div>
        <div className={s.dialog}>
          Petr
        </div>
        <div className={s.dialog}>
          Andrey
        </div>
        <div className={s.dialog}>
          Violetta
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          Hi!
        </div>
        <div className={s.message}>
          How are you?
        </div>
        <div className={s.message}>
          I cann't stop to codeing
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
