import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInRequest, signUpRequest } from './operations';
import { IUser } from './types';

const initialState: IUser = { name: '', email: '', token: '' };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        logOut() {
            return {...initialState};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUpRequest.fulfilled, (state, action) => {
            const user = action.payload;
            return {...state, ...user};
        });
        builder.addCase(signInRequest.fulfilled, (state, action) => {
            const user = action.payload;
            return {...state, ...user};
        })
    }
});

export const actions = {...userSlice.actions, signInRequest, signUpRequest};
export default userSlice.reducer;
