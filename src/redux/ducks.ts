import * as column from './ducks/column';
import * as tasks from './ducks/tasks';
import * as user from './ducks/user';

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
