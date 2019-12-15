import React from 'react';
import {Suspense} from 'react'
import './HomeLayout.css'
import { Redirect } from 'react-router-dom';
import Header from '../Components/Header/Header'
import Sidenav from '../Components/Sidenav/Sidenav'
import Dashboard from '../Components/MainContent/Dashboard'
import Accounts from '../Components/MainContent/Account'
var SessionStorageUtil = require('../Utils/SessionStorageUtil')
var RouteNames = require('../Constants/RouteNames')


export default class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: SessionStorageUtil.getItemFromSession('userLoggedIn')
        }
        this.handleLogout = this.handleLogout.bind(this);
        console.log('inside dashboard', SessionStorageUtil.getItemFromSession('userLoggedIn'))
    }
    componentDidMount(){
        
    }
    handleLogout() {
        sessionStorage.clear();
        this.setState({
            userLoggedIn: false
        })
    }
    render() {
        var userName=SessionStorageUtil.getItemFromSession('userName')
        var userLoggedIn = this.state.userLoggedIn;
        const MainContent = this.props.mainContent
        
        return (
            <div>
                {userLoggedIn ?
                    <div className="grid-container">
                        <Header userName={userName} onClick={this.handleLogout} />
                        <Sidenav />
                        <Suspense fallback={<div>Loading...</div>}>
                            <MainContent />
                        </Suspense>
                        
                        <footer className="footer"></footer>
                    </div > : <Redirect to={RouteNames.LOGIN} />}
            </div>

        )
    }
}