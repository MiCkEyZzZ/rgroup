import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Character, Characters } from './pages'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/personages/' exact component={ Characters } />
            <Route path='/personages/personage/:id' exact component={ Character } />
            <Redirect to='/personages/' />
        </Switch>
    )
}