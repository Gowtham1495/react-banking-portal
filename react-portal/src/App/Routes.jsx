import HomeLayout from '../Layouts/HomeLayout'
import LoginPage from '../Components/LoginPage/LoginPage'
import Dashboard from '../Components/MainContent/Dashboard'
import Accounts from '../Components/MainContent/Account'
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