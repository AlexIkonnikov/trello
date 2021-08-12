import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn } from './types';

const initialState: Array<IColumn> = [
    { id: '0', name: 'TODO' },
    { id: '1', name: 'In Progress' },
    { id: '2', name: 'Testing' },
    { id: '3', name: 'Done' },
];
const columnSlice = createSlice({
    name: 'column',
    initialState,
    reducers: {
        updateColumn(state, { payload }: PayloadAction<IColumn>) {
            const index = state.findIndex(column => column.id === payload.id);
            if (index !== - 1) state.splice(index, 1, payload);
        },
    },
});

export default columnSlice.reducer;
export const actions = columnSlice.actions;
