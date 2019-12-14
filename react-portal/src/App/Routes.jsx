var RouteNames = require('../Constants/RouteNames')

import BankingPortal from '../App/BankingPortal'
import HomeLayout from '../Layouts/HomeLayout'
import LoginPage from '../Components/LoginPage/LoginPage'

export const routes = [
    {
      path: RouteNames.LANDING,
      component: BankingPortal
    },
    {
      path: RouteNames.LOGIN,
      component: LoginPage
    },
    {
        path: RouteNames.DASHBOARD,
        component: HomeLayout
      }
  ];