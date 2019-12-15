import React,{Suspense} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout'
import routesMap from './Routes'

var RouteNames = require('../Constants/RouteNames')


export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                    <Route exact path={RouteNames.LANDING} render={(routeProps) => <HomeLayout {...routeProps} mainContent='Dashboard'/>} />
                    {routesMap.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    </Switch>
                </Suspense>         
            </Router>
        )
    }
}

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} mainContent={route.mainContent}/>
        )}
      />
    );
  }