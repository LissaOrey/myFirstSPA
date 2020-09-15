import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


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
                                    
                                    ? <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                    }} >unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => { props.follow(u.id)
                                        // props.toggleIsFollowingProgress(true, u.id);
                                        // usersAPI.follow(u.id).then(data => { 
                                        //     if(data.resultCode ==0){
                                        //         props.follow(u.id)
                                        //     }
                                        //     props.toggleIsFollowingProgress(false,u.id);
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