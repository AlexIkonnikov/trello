import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITasks, ITask, IComment, ICommentPayload } from './types';

const initialState: ITasks = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, { payload }: PayloadAction<ITask>) {
            state.tasks.push(payload);
        },
        updateTask(state, { payload }: PayloadAction<ITask>) {
            state.tasks = state.tasks.map((task) => (task.id === payload.id ? payload : task));
        },

        deleteTask(state, { payload }: PayloadAction<string>) {
            state.tasks = state.tasks.filter((task) => task.id !== payload);
        },

        addComment(state, { payload }: PayloadAction<ICommentPayload>) {
            state.tasks = state.tasks.map((task) => {
                if (task.id === payload.task_id) {
                    task.comments.push(payload.comment);
                }
                return task;
            });
        },

        updateComment(state, { payload }: PayloadAction<ICommentPayload>) {
            state.tasks = state.tasks.map((task) => {
                if (task.id === payload.task_id) {
                    task.comments = task.comments.map((cmt) => {
                        if (cmt.id === payload.comment.id) {
                            return payload.comment;
                        } else {
                            return cmt;
                        }
                    });
                }
                return task;
            });
        },

        deleteComment(state, { payload }: PayloadAction<ICommentPayload>) {
            state.tasks = state.tasks.map((task) => {
                if (task.id === payload.task_id) {
                    task.comments = task.comments.filter((cmt) => cmt.id !== payload.comment.id);
                }
                return task;
            });
        },
    },
});

export default tasksSlice.reducer;
export const { addTask, updateTask, deleteTask, addComment, updateComment, deleteComment } = tasksSlice.actions;
