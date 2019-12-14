import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout'
import routeMaps from './Routes'

var RouteNames = require('../Constants/RouteNames')


export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path={RouteNames.LANDING} render={(routeProps) => <HomeLayout {...routeProps} mainContent='Dashboard'/>} />
                {routeMaps.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                </Switch>          
            </Router>
        )
    }
}

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} mainContent={route.mainContent}/>
        )}
      />
    );
  }