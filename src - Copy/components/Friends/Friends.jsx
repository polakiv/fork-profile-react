import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/friends/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
             <NavLink to={path}><img alt="fds" className={s.img} src={props.img} />{props.name}</NavLink>
            </div>
}
 

const Friends = (props) => {

   
    let friendsElements = props.state.friends.map ( d => <FriendItem name={d.name} id={d.id} img={d.img} />); 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> 
              { friendsElements }
            </div> 
        </div>
    )
}

export default Friends;