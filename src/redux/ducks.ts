import * as column from './column';
import * as tasks from './tasks';
import * as user from './user';

export const actions = {
    user: user.actions,
    tasks: tasks.actions,
    column: column.actions
};

export const selectors = {
    user: user.selectors,
    tasks: tasks.selectors,
    column: column.selectors
};
