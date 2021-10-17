import React, { FC } from 'react'
import { selectors } from '../redux/ducks';
import { useAppSelector } from '../redux/hook';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const RootRouter: FC = () => {
    const isAuth = useAppSelector(selectors.user.selectToken);
    return isAuth ? <PrivateRoute /> : <PublicRoute />;
};

export default RootRouter;
