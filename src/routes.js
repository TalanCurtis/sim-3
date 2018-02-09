import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Auth from './containers/Auth'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import Search from './containers/Search'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Search' component={Search} />
    </Switch>
)