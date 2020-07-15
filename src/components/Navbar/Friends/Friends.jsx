import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        // <div className={s.friends}>
            <div className={s.friendBlock}>
                <img src={props.src} alt="avatar"/>
                {props.name}
            </div>
        // </div>
    )
}
export default Friends;
