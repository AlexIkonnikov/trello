import { createSelector, Selector} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ITask } from './types';

const taskSliceSelector = (state: RootState) => {
    return state.tasks;
};

const tasksForColumnSelector = (id: string):Selector<RootState, Array<ITask>> => {
    return createSelector(taskSliceSelector, (tasks: Array<ITask>) => tasks.filter((task) => task.column_id === id));
};

export { tasksForColumnSelector };
