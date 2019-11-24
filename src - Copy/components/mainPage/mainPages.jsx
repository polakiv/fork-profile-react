import React from 'react';
import styles from "./mainpages.module.css";
import userPhoto from "../../assets/images/placeholder.png";
import {NavLink} from "react-router-dom";

let mainPages = (props) => {
 

    return <div> 
        </div>
        {
            props.mainpages.map(u => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/mainpages/' + u.id}>
                        <img src={u.image != null ? u.image : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        } 
}

export default mainPages;