import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import { useEffect } from 'react'


let Users = (props) => {
    debugger
    if(props.users.length ===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => { props.setUsers(response.data.items) })
    }
    
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={style.leftBlock}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.usersPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }} >unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }} >follow</button>}
                        </div>
                    </div>
                    <div className={style.rightBlock}>
                        <div className={style.userBlocks}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={style.userBlocks}>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;