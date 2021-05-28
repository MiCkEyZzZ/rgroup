import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Users} from './pages/Users/Users'
import {User} from './pages/User/User'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/personages/' exact component={Users} />
            <Route path='/personages/personage/:id' exact component={User} />
            <Redirect to='/personages/' />
        </Switch>
    )
}