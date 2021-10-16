import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router';
import { StartPageLayout } from '../layouts/StartPageLayout';
import { Auth } from '../pages/Auth';
import { Registration } from '../pages/Registration';
import { ROUTES } from './routes';

const PublicRoute: FC = () => {
    return (
        <StartPageLayout>
            <Switch>
                <Route path={ROUTES.auth} component={Auth} />
                <Route path={ROUTES.registration} component={Registration} />
                <Redirect to={ROUTES.auth} />
            </Switch>
        </StartPageLayout>
    );
}

export default PublicRoute;
