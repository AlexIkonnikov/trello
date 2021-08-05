import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Columns, IColumn } from './types';

const initialState: Columns = {
    columns: [
        { id: '0', name: 'TODO'},
        { id: '1', name: 'In Progress'},
        { id: '2', name: 'Testing'},
        { id: '3', name: 'Done'},
    ],
};

const columnSlice = createSlice({
    name: 'column',
    initialState,
    reducers: {
        changeColumnName(state, {payload}: PayloadAction<IColumn>) {
            state.columns.map((column) => {
                if (column.id === payload.id) {
                    column.name = payload.name;
                }
                return column;
            });
        },
    },
});

export default columnSlice.reducer;
export const { changeColumnName } = columnSlice.actions;
