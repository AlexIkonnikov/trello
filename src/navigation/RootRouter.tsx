import React, { FC } from 'react'
import { Board } from '../pages/Board';
import PublicRoute from './PublicRoute';

const RootRouter: FC = () => {
    const isAuth = false;
    return isAuth ? <Board /> : <PublicRoute />
}

export default RootRouter;
