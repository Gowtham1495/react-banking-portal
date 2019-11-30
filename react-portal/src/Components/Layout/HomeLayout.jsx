import React from 'react';
import './HomeLayout.css'
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header'
import Sidenav from '../Sidenav/Sidenav'
import Dashboard from '../MainContent/Dashboard'
import Accounts from '../MainContent/Account'
var SessionStorageUtil = require('../../Utils/SessionStorageUtil')
var RouteNames = require('../../Constants/RouteNames')


export default class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: SessionStorageUtil.getItemFromSession('userLoggedIn')
        }
        this.handleLogout = this.handleLogout.bind(this);
        console.log('inside dashboard', SessionStorageUtil.getItemFromSession('userLoggedIn'))
    }

    handleLogout() {
        sessionStorage.clear();
        this.setState({
            userLoggedIn: false
        })
    }
    render() {
        const components = {
            Dashboard: Dashboard,
            Accounts: Accounts
        };
        var userLoggedIn = this.state.userLoggedIn;
        console.log('mainContent', this.props.mainContent)
        const MainContent = components[this.props.mainContent];
        return (

            <div>
                {userLoggedIn ?
                    <div className="grid-container">
                        <Header userName={this.props.location.state.userName} onClick={this.handleLogout} />
                        <Sidenav />
                        <MainContent />
                        <footer className="footer"></footer>
                    </div > : <Redirect to={RouteNames.LOGIN} />}
            </div>

        )
    }
}