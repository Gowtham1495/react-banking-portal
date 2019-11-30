import React from 'react'
import { Route, Redirect } from 'react-router-dom';
var RouteNames = require('../../Constants/RouteNames')
var SessionStorageUtil = require('../../Utils/SessionStorageUtil')

export default function PrivateRoute({ children, ...rest }) {
    return (

        <Route
            {...rest}
            render={({ location }) =>
                SessionStorageUtil.getItemFromSession('userLoggedIn') ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: RouteNames.LOGIN,
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}