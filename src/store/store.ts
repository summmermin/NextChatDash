import {configureStore} from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import userReducer from './userSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        user: userReducer,
        settings: settingsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
