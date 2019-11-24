import React from 'react';
import s from './../Friends.module.css';

const FriendMessage = (props) => {
    return <div className={s.friend}>{props.friendmessage}</div>
}

export default FriendMessage;