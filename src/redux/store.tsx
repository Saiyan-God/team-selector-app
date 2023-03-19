
import { configureStore } from '@reduxjs/toolkit';

import playerListReducer from './playerList';
import teamDirectoryReducer from './teamDirectory';

const store = configureStore({
    reducer: {
        playerList: playerListReducer,
        teamDirectory: teamDirectoryReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch