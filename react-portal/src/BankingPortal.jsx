import React from 'react';
import { Redirect } from 'react-router-dom';
var RouteNames = require('./Constants/RouteNames')
var SessionStorageUtil = require('./Utils/SessionStorageUtil')

export default function BankingPortal() {
    var userLoggedIn = SessionStorageUtil.getItemFromSession('userLoggedIn')

    if (userLoggedIn) {
        return (
            <div className='app'>
                <Redirect to={{
                    pathname: RouteNames.DASHBOARD,
                    state: { userName: 'Gowtham' }
                }} />
            </div>
        )
    } else {
        return (
            <div className='app'>
                <Redirect to={{
                    pathname: RouteNames.LOGIN
                }
                } />
            </div>
        )
    }

}