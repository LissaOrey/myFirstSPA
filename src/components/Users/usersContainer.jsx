import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../Redux/users-reducer';

class UsersContainer extends React.Component {
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
        return <Users usersTotalCount= {this.props.usersTotalCount}
                        pageSize={this.props.pageSize} 
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow} 
                        follow={this.props.follow}
                        users = {this.props.users} />
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

// export default UsersContainer;