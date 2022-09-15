import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardTwo from '../Dashboard/dashboardTwo'
import Login from '../LoginPage/login'
import SignUp from '../SignUpPage/signup'
import Success from '../Success/Success'
import Wishlist from '../Wishlist/Wishlist'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/DashboardTwo" component={DashboardTwo} />
          <Route exact path="/Wishlist" component={Wishlist} />
          <Route exact path="/Success" component={Success} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
