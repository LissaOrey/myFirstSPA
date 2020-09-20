import React from 'react';
import s from './Friends.module.css';
import { connect } from 'react-redux';

const Friends = (props) => {
  console.log(props.users);
  return (
    <div>
      Friends
    </div>
  )
}
export default Friends;
