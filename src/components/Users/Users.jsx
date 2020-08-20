import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'
// import { useEffect } from 'react'


class Users extends React.Component {
    // constructor(props){
    //     super(props);
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then(response => { this.props.setUsers(response.data.items) })        
    // }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { this.props.setUsers(response.data.items)
                                this.props.setTotalUsersCount(response.data.totalCount) })
    }
    onPageChanged =(pageNumber)=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => { this.props.setUsers(response.data.items) });

        this.props.setCurrentPage(pageNumber);
    }
    render() {
        let pageCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);
        let pages =[];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        };
        
        return (
            <div>
                {pages.map(p=>{
                    return <span className={this.props.currentPage === p && style.selectedPage } onClick={()=>{this.onPageChanged(p)}}>-{p}</span>
                })}
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={style.leftBlock}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.usersPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }} >unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}

   
export default Users;