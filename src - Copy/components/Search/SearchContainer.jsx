import React from 'react';
import { connect } from 'react-redux';
import {
    searchfollow,
    setsearchUsers,
    toggleIsFetching,
    searchunfollow
}
    from '../../redux/search-reducer';
import * as axios from 'axios';
import Search from './Search';
import Preloader from "../common/Preloader/Preloader";


class SearchContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://wikirip.site/index.php?route=api/searchten&searchhome=каледин`)

            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setsearchUsers(response.data.items);
                //  this.props.setTotalUsersCount(response.data.items.product_total);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://wikirip.site/index.php?route=api/searchten&searchhome=каледин`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setsearchUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Search searchusers={this.props.searchusers}
                searchfollow={this.props.searchfollow}
                searchunfollow={this.props.searchunfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        searchusers: state.searchPage.searchusers,
        isFetching: state.searchPage.isFetching
    }
}

export default connect(mapStateToProps,
    { searchfollow, searchunfollow, setsearchUsers, toggleIsFetching })(SearchContainer);