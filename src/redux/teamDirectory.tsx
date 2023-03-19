import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { Team, TeamDirectory} from '../DataTypes';

const initialState: TeamDirectory = {
    'team-1-test': {
        id: 'team-1-test',
        name: 'Team 1',
        players: []
    },
    'team-2-test': {
        id: 'team-2-test',
        name: 'Team 2',
        players: []
    },
}

export const teamDirectorySlice = createSlice({
    name: 'teamDirectory',
    initialState,
    reducers: {
        addTeam: (state, action) => {
            if(action.payload.teamName == null || action.payload.teamName === '') {
                return state;
            }
            let id = '';
            while(id === '' || state[id] != null) {
                id = uuidv4();
            }
            const newTeam: Team = {
                name: action.payload.teamName,
                id,
                players: []
            }
            state[id] = newTeam;
            return state;
        },
        removeTeam: (state, action) => {
            if(action.payload.id == null || action.payload.id === '' || state[action.payload.id] == null) {
                return state;
            }
            delete state[action.payload.id];
            return state;
        },
        setPlayers: (state, action) => {
            if(!Array.isArray(action.payload)){
                return state
            }
            for(let team of action.payload){
                if(typeof team != 'object' ||
                    !team.id ||
                    !team.players ||
                    !Array.isArray(team.players)){
                        continue;
                }
                state[team.id].players = team.players;
            }
            return state;
        }
    }
})

export const { addTeam, removeTeam, setPlayers } = teamDirectorySlice.actions;

export default teamDirectorySlice.reducer;