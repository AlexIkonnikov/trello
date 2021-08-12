import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { ITask, IComment } from './types';

const initialState: Array<ITask> = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, { payload }: PayloadAction<ITask>) {
            state.push(payload);
        },
        updateTask(state, { payload }: PayloadAction<ITask>) {
          return state.map((task) => task.id === payload.id ? payload : task);
        },

        deleteTask(state, { payload }: PayloadAction<string>) {
            return state.filter((task) => task.id !== payload);
        },

        addComment(state, { payload }: PayloadAction<IComment>) {
            state = state.map((task) => {
                if (task.id === payload.task_id) {
                    task.comments.push(payload);
                }
                return task;
            });
        },

        updateComment(state, { payload }: PayloadAction<IComment>) {
            state = state.map((task) => {
                if (task.id === payload.task_id) {
                    task.comments = task.comments.map((cmt) => {
                        if (cmt.id === payload.id) {
                            return payload;
                        } else {
                            return cmt;
                        }
                    });
                }
                return task;
            });
        },

        deleteComment(state, { payload }: PayloadAction<IComment>) {
            state = state.map((task) => {
                if (task.id === payload.task_id) {
                    task.comments = task.comments.filter((cmt) => cmt.id !== payload.id);
                }
                return task;
            });
        },
    },
});

export default tasksSlice.reducer;
export const actions = tasksSlice.actions;
