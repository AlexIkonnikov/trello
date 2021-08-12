import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IUser } from './types';

const selectUserSlice = (state: RootState): IUser => {
    return state.user;
};

const selectUserName = createSelector(
  selectUserSlice,
    (user: IUser) => user.name,
);

export const selectors = {selectUserSlice, selectUserName};
