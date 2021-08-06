import { createSelector, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IColumn } from './types';

const columnSliceSelector = (state: RootState): Array<IColumn> => {
      return state.column;
};

const columnNameByIdSelector = (columnId: string): Selector<RootState, string> => {
    return createSelector(columnSliceSelector, (columns: Array<IColumn>) => {
        const column = columns.find((col) => col.id === columnId);
        return column ? column.name : '';
    });
}

export {columnSliceSelector, columnNameByIdSelector};
