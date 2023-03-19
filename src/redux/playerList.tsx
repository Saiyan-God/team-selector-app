import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { Player, PlayerList} from '../types/DataTypes';

const player1Id = uuidv4();
const player2Id = uuidv4();

const initialState: PlayerList = {
    players: {
        [player1Id]: {
            name: 'Player 1',
            id: player1Id
        },
        [player2Id]: {
            name: 'Player 2',
            id: player2Id
        }
    }
}

export const playerListSlice = createSlice({
    name: 'playerList',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            if(action.payload.playerName == null || action.payload.playerName === ''){
                return state;
            }
            let id = '';
            while(id === '' || state.players[id] != null){
                id = uuidv4();
            }
            const newUser: Player = {
                name: action.payload.playerName,
                id,
            }
            state.players[id] = newUser;
            return state;
        },
        removePlayer: (state, action) => {
            if(action.payload.id == null || action.payload.id === '' || state.players[action.payload.id] == null) {
                return state;
            }
            
            delete state.players[action.payload.id];
            return state;
        }
    }
})

export const { addPlayer, removePlayer } = playerListSlice.actions;

export default playerListSlice.reducer;