import React from 'react'
import { Switch } from 'react-router';
import { Route } from 'react-router-dom'
import Login from './containers/Login'
import NewsFeed from './containers/NewsFeed'
import Home from './containers/Home'
const Routes = (props) => (
    <Switch>
      <Route exact path="/login" render={routeProps => <Login {...routeProps} title="Login" />} />
      <Route exact path="/feed" render={routeProps => <NewsFeed {...routeProps} title="NewsFeed" />} />
      <Route path="/" render={routeProps => <Home  {...routeProps} title="Home" />} />
    </Switch>
)
export default Routes
