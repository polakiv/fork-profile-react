import React from 'react';
import {connect} from 'react-redux';
import {
    follow, 
    setUsers, 
    unfollow
} 
from '../../redux/users-reducer';
import * as axios from 'axios';
import mainPages from '../../components/mainPage/mainPages'; 
import Preloader from "../common/Preloader/Preloader";


class mainPagesContainer extends React.Component {
    componentDidMount() { 
        this.props.toggleIsFetching(true);
        axios.get(`https://wikirip.site/index.php?route=api/product`)
            .then(response => { 
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
              //  this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

     

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
            <mainPages      users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
             />
        </>
    } 
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, 
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, toggleIsFetching})(mainPagesContainer);