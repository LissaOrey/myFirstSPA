import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../Redux/users-reducer';

let mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,
    }
};
let mapDispatchToProps =(dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (PageNumber)=>{
            dispatch(setCurrentPageAC(PageNumber));
        },
        setTotalUsersCount: (count)=>{
            dispatch(setUsersTotalCountAC(count));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

// export default UsersContainer;