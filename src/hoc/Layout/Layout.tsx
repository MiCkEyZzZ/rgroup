import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './Layout.scss'

import {useRoutes} from '../../routes'

export const Layout: React.FC = () => {
    const routes = useRoutes()

    return (
        <Router>
            <>
                {routes}
            </>
        </Router>
    )
}