import React from 'react';
import s from './Friends.module.css';
import { getUsers,setFriends } from '../../Redux/users-reducer';

import Friends from './Friends';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  // onPageChanged = () => {
  //   this.props.setFriends();
  // }
  render() {
    return <>
      {/* {this.props.isFetching ? <Preloader /> : null} */}
      <Friends users={this.props.users} friends={this.props.friends} />
    </>
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    friends: state.usersPage.friends,
  }
}
export default connect(mapStateToProps, {getUsers,setFriends})(FriendsContainer)
