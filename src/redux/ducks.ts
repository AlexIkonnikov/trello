import { updateColumn } from './ducks/column';
import {
    addComment,
    addTask,
    deleteComment,
    deleteTask,
    selectTasksForColumn,
    updateComment,
    updateTask,
} from './ducks/tasks';
import { selectUserName, setUserName } from './ducks/user';
import { selectColumnSlice, selectColumnNameById } from './ducks/column';

export const actions = {
    user: setUserName,
    column: updateColumn,
    task: {
        add: addTask,
        update: updateTask,
        delete: deleteTask,
    },
    comment: {
        add: addComment,
        update: updateComment,
        delete: deleteComment,
    },
};

export const selectors = {
    user: {
        name: selectUserName,
    },
    task: selectTasksForColumn,
    column: {
        selectColumnSlice,
        selectColumnNameById,
    },
};
