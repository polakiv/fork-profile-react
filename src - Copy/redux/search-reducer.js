import React from 'react';
import * as axios from 'axios';

const SEARCH_FOLLOW = 'SEARCH_FOLLOW';
const SEARCH_UNFOLLOW = 'SEARCH_UNFOLLOW';
const SET_SEARCH_USERS = 'SET_SEARCH_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    searchusers: [],
    isFetching: true
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FOLLOW:
            return {
                ...state,
                searchusers: state.searchusers.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    // axios.get(`https://wikirip.site/index.php?route=api/removewishlist&customer_id=3&product_id=${u.id}`)
                    axios.get(`https://wikirip.site/index.php?route=api/addwishlist&customer_id=3&product_id=33`)

                    return u;
                })
            }
        case SEARCH_UNFOLLOW:
            return {
                ...state,
                searchusers: state.searchusers.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    axios.get(`https://wikirip.site/index.php?route=api/removewishlist&customer_id=3&product_id=33`)
                    //=${u.id}                       
                    return u;
                })
            }
        case SET_SEARCH_USERS: {
            return { ...state, searchusers: action.searchusers }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}


export const searchfollow = (userId) => ({ type: SEARCH_FOLLOW, userId })
export const searchunfollow = (userId) => ({ type: SEARCH_UNFOLLOW, userId })
export const setsearchUsers = (searchusers) => ({ type: SET_SEARCH_USERS, searchusers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default searchReducer;