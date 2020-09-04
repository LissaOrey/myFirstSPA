import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { followAPI } from '../../api/api';

// import { useEffect } from 'react'


const Users =(props)=>{
        let pageCount = Math.ceil(props.usersTotalCount / props.pageSize);
        let pages =[];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        };
        
        return (
            <div>
                {pages.map(p=>{
                    return <span className={props.currentPage === p && style.selectedPage } onClick={()=>{props.onPageChanged(p)}}>-{p}</span>
                })}
                {
                    props.users.map(u => <div key={u.id}>
                        <div className={style.leftBlock}>
                            <div>
                                <NavLink to={'/profile/'+u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.usersPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {

                                        followAPI.unfollow().then(data => { 
                                            if(data.resultCode ==0){
                                                props.unfollow(u.id)
                                            }
                                        });
                                        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        //     withCredentials:true, 
                                        //     headers: {
                                        //         'API-KEY':'d538c08b-0a5b-4fe6-b5ae-73c0051f7975'
                                        //     }
                                        // })
                                        // .then(data => { 
                                        //     if(data.resultCode ==0){
                                        //         props.unfollow(u.id)
                                        //     }
                                        // });

                                    }} >unfollow</button>

                                    : <button onClick={() => {

                                        followAPI.follow(u).then(data => { 
                                            if(data.resultCode ==0){
                                                props.follow(u.id)
                                            }
                                        });
                                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        //     withCredentials:true, 
                                        //     headers: {
                                        //         'API-KEY':'d538c08b-0a5b-4fe6-b5ae-73c0051f7975'
                                        //     }
                                        // })
                                        // .then(response => { 
                                        //     if(response.data.resultCode ==0){
                                        //         props.follow(u.id)
                                        //     }
                                        // });

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