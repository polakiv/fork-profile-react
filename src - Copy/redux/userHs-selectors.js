import {createSelector} from "reselect";

const getUserHsSelector = (state) => {
    return state.userHsPage.userHs;
}

export const getUserHs = createSelector(getUserHsSelector,
    (userHs) => {
    return userHs.filter(u => true);
})

export const getPageSize = (state) => {
    return state.userHsPage.pageSize;
}

export const getTotalUserHsCount = (state) => {
    return state.userHsPage.totalUserHsCount;
}

export const getCurrentPage = (state) => {
    return state.userHsPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.userHsPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.userHsPage.followingInProgress;
}

export const countSomethingDifficult = (state) => {
    debugger
    //for... math... big arrays
    let count = 23;
    return count;
}