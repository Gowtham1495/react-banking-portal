import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import BankingPortal from '../App/BankingPortal'
import HomeLayout from '../Layouts/HomeLayout'
import LoginPage from '../Components/LoginPage/LoginPage'

var RouteNames = require('../Constants/RouteNames')


export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={RouteNames.LANDING} render={(routeProps) => <BankingPortal {...routeProps} />} />
                <Route path={RouteNames.LOGIN} render={(routeProps) => <LoginPage {...routeProps} />} />
                <Route path={RouteNames.DASHBOARD} render={(routeProps) => <HomeLayout {...routeProps} mainContent='Dashboard' />} />
                <Route path={RouteNames.ACCOUNTS} render={(routeProps) => <HomeLayout {...routeProps} mainContent='Accounts' />} />
            </Router>
        )
    }
}