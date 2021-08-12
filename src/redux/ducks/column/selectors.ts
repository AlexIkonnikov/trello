import { createSelector, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IColumn } from './types';

const selectColumnSlice = (state: RootState): Array<IColumn> => {
      return state.column;
};

const selectColumnNameById = (columnId: string): Selector<RootState, string> => {
    return createSelector(selectColumnSlice, (columns: Array<IColumn>) => {
        const column = columns.find((col) => col.id === columnId);
        return column ? column.name : '';
    });
}

export const selectors = {selectColumnSlice, selectColumnNameById};
