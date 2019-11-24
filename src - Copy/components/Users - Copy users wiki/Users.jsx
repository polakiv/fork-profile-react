import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/placeholder.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
    //  debugger;

    //  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 10; i++) { //   pagesCount вместо 10
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>  
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.image_remote1 != null ? u.image_remote1 : userPhoto}
                                className={styles.userPhoto} />
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
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                {u.name}
                                <div>Цветы {u.status}</div>
                            </NavLink>
                        </div>
                    </span>
                    <span>

                        <div> {u.mpn}</div>
                        <div>{u.isbn}</div>
                        <div>{u.page}</div>
                        <div>{u.limit}</div>
                        <div>{u.product_total}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;