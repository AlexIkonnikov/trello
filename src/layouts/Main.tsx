import React, { FC } from 'react'
import { Header } from '../components/Header'
import { selectors } from '../redux/ducks';
import { useAppSelector } from '../redux/hook';

export const Main: FC = ({ children }) => {
    const userName = useAppSelector(selectors.user.selectUserName);
    return (
        <>
            <Header name={userName} />
            {children}
        </>
    )
}
