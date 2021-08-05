import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './ducks/user';
import { columnReducer } from './ducks/column';
import { tasksReducer } from './ducks/tasks';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    column: columnReducer,
    task: tasksReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer, devTools: true});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
