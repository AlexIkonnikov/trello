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
            state.map((column) => {
                if (column.id === payload.id) {
                    column.name = payload.name;
                }
                return column;
            });
        },
    },
});

export default columnSlice.reducer;
export const actions = columnSlice.actions;
