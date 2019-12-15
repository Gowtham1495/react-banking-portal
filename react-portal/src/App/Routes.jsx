import React from 'react'
const HomeLayout =React.lazy(() => import('../Layouts/HomeLayout'));
const LoginPage = React.lazy(() => import('../Components/LoginPage/LoginPage'));
const Dashboard = React.lazy(() => import('../Components/MainContent/Dashboard'));
const Accounts = React.lazy(() => import('../Components/MainContent/Account'));
var RouteNames = require('../Constants/RouteNames')

const routesMap = [
    {
      path: RouteNames.LOGIN,
      component: LoginPage,
      mainContent: ''
    },
    {
        path: RouteNames.DASHBOARD,
        component: HomeLayout,
        mainContent: Dashboard

      },
      {
        path: RouteNames.ACCOUNTS,
        component: HomeLayout,
        mainContent: Accounts

      }

  ];

export default routesMap;