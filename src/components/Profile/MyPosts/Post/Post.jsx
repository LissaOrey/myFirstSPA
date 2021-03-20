import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/02/c1/ab/02c1abf429d7e4ca96a4c96eb636ed97.jpg" alt="" />
            {props.message}
            <div>
                <span>likes:</span> { props.likesCount }
            </div>
        </div>
    )
}
export default Post;