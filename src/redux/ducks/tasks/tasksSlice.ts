import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITasks, ITask } from './types';

const initialState: ITasks = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, {payload}: PayloadAction<ITask>) {
            state.tasks.push(payload);
        },
        updateTask(state, {payload}: PayloadAction<ITask>) {
            state.tasks = state.tasks.map((task) => task.id === payload.id ? payload : task);
        },

        deleteTask(state, {payload}: PayloadAction<string>) {
            state.tasks = state.tasks.filter((task) => task.id !== payload);
        },
    }
});

export default tasksSlice.reducer;
export const {addTask, updateTask, deleteTask} = tasksSlice.actions;
