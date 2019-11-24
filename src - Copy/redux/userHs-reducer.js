import {userHsAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    userHs: [],
    pageSize: 10,
    totalUserHsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
};

const userHsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userHs: updateObjectInArray(state.userHs, action.userHId, "id", {followed: true} )
            }
        case UNFOLLOW:
            return {
                ...state,
                userHs: updateObjectInArray(state.userHs, action.userHId, "id", {followed: false} )
            }
        case SET_USERS: {
            return {...state, userHs: action.userHs}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserHsCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userHId]
                    : state.followingInProgress.filter(id => id != action.userHId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userHId) => ({type: FOLLOW, userHId})
export const unfollowSuccess = (userHId) => ({type: UNFOLLOW, userHId})
export const setUserHs = (userHs) => ({type: SET_USERS, userHs})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserHsCount = (totalUserHsCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUserHsCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userHId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userHId
})

export const requestUserHs = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await userHsAPI.getUserHs(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUserHs(data.items));
        dispatch(setTotalUserHsCount(500));
    }
}

const followUnfollowFlow = async (dispatch, userHId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userHId));
    let response = await apiMethod(userHId);

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userHId));
    }
    dispatch(toggleFollowingProgress(false, userHId));
}

export const follow = (userHId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userHId, userHsAPI.follow.bind(userHsAPI), followSuccess);
    }
}
export const unfollow = (userHId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userHId, userHsAPI.unfollow.bind(userHsAPI), unfollowSuccess);
    }
}

export default userHsReducer;