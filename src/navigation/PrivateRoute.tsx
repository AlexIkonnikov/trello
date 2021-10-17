import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Main } from '../layouts/Main'
import { Board } from '../pages/Board'
import { Profile } from '../pages/Profile'
import { ROUTES } from './routes'

const PrivateRoute: FC = () => {
    return (
        <Main>
            <Switch>
                <Route path={ROUTES.board} component={Board} />
                <Route path={ROUTES.profile} component={Profile} />
                <Redirect to={ROUTES.board} />
            </Switch>
        </Main>
    )
}

export default PrivateRoute
