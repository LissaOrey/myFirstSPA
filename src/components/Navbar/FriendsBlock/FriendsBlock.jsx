import React from 'react';
import s from './FriendsBlock.module.css';

const FriendsBlock = (props) => {
    return (
        // <div className={s.friends}>
            <div className={s.friendBlock}>
                <img src={props.src} alt="avatar"/>
                {props.name}
            </div>
        // </div>
    )
}
export default FriendsBlock;
