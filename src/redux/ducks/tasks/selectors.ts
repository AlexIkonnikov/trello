import { createSelector, Selector} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ITask } from './types';

const selectTaskSlice = (state: RootState) => {
    return state.tasks;
};

const selectTasksForColumn = (id: string):Selector<RootState, Array<ITask>> => {
    return createSelector(selectTaskSlice, (tasks: Array<ITask>) => tasks.filter((task) => task.column_id === id));
};

export const selectors = {selectTaskSlice, selectTasksForColumn};
