import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, withRouter } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import UserHsContainer from "./components/UserHs/UserHsContainer";
import mainPage from "./components/mainPage/mainPage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";


import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)} />
                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route exact path='/'
                        render={() => <UserHsContainer />} />

                    <Route exact path='/' component={mainPage} />
                    <Route path='/login'
                        render={() => <LoginPage />} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Navbar />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const WikiripJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default WikiripJSApp;
