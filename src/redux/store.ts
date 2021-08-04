import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './ducks/user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
