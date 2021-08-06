import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IUser } from './types';

const userSliceSelector = (state: RootState): IUser => {
    return state.user;
};

const userNameSelector = createSelector(
    userSliceSelector,
    (user: IUser) => user.name,
);

export {userNameSelector}
