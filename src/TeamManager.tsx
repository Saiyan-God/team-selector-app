import { useState } from 'react';
import { Player, TeamDirectory } from './DataTypes';

import NewPlayer from './NewPlayer';
import NewTeam from './NewTeam';
import PlayersListPanel from './PlayersListPanel';
import TeamPanel from './TeamPanel';
import { shuffleArray } from './utilities/untils';

const initialPlayers: Player[] = [];

const initialTeams: TeamDirectory = {
    'Team 1': [],
    'Team 2': [],
};


export function TeamManager() {
    let [teams, setTeams] = useState(initialTeams);
    let [players, setPlayers] = useState(initialPlayers);

    const addPlayer = (playerName: string) => {
        if(playerName) {
            const newPlayers = players.slice();
            newPlayers.push({
                name: playerName
            });
            console.log('player added');
            setPlayers(newPlayers);
        }
        console.log('no player name provided');
    }

    const removePlayer = (index: number) => {
        console.log(`index to remove: ${index}`)
        if(index >= 0 && index < players.length) {
            const newPlayers = players.slice();
            newPlayers.splice(index, 1);
            console.log(newPlayers);
            console.log('player removed');
            setPlayers(newPlayers);
        }
    }

    const addTeam = (teamName: string) => {
        if(teamName && !teams.hasOwnProperty(teamName)) {
            const newTeams = {...teams};
            newTeams[teamName] = [];
            console.log('team added')
            setTeams(newTeams);
        }
        else {
            console.log('team already exists')
        }
    };

    const removeTeam = (teamName: string) => {
        if(teamName && teams.hasOwnProperty(teamName)) {
            const newTeams = {...teams};
            delete newTeams[teamName];
            console.log(`team removed`);
            console.log(newTeams);
            setTeams(newTeams);
        }
    }

    const randomizeTeam = () => {
        const numTeams = Object.keys(teams).length;
        if(numTeams > 0) {
            const playersCopy = players.slice();
            shuffleArray(playersCopy);
            const newTeamsLineup = new Array(numTeams).fill([]).map(() => new Array(0));
            let teamIndex = 0;
            for(let player of playersCopy) {
                newTeamsLineup[teamIndex++].push(player);
                if(teamIndex >= numTeams) {
                    teamIndex = 0;
                }
            }
            const teamsList = Object.keys(teams);
            const newTeams = {...teams};
            for(let i = 0; i < numTeams; i++) {
                newTeams[teamsList[i]] = newTeamsLineup[i];
            }
            setTeams(newTeams);
        }
        else {
            console.log('No teams to assign players to');
        }
    }

    return (
        <>
            <div className='bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-400 font-mono font-bold h-screen'>
                <div className="p-6 bg-black text-white text-2xl">  
                    <h1>
                        Team Selector
                    </h1>
                </div>
                <div className='flex flex-row space-x-4 p-4'>
                    <div className='basis-1/4 rounded bg-emerald-400 border-black border-4 p-4'>
                        <NewPlayer
                            addPlayer={addPlayer}
                        />
                        <NewTeam 
                            addTeam={addTeam}
                        />
                        <div>
                            <button
                                className="bg-indigo-100 p-1 mt-2"
                                onClick={randomizeTeam}
                            >Randomize Teams</button>
                        </div>
                    </div>
                    <div className='basis-1/4 rounded bg-amber-400 border-black border-4 p-4'>
                        <h2>Players:</h2>
                        <PlayersListPanel
                            players={players}
                            removePlayer={removePlayer}
                        />
                    </div>
                    <div className='basis-1/4 rounded bg-blue-400 border-black border-4 p-4'>
                        <h2>Teams:</h2>
                        <ul>
                            {Object.entries(teams).map(([teamName, players], index) => (
                                // <li key={index} className="bg-red-700">
                                <li className="" key={teamName}>
                                    <TeamPanel 
                                        players={players}
                                        removeTeam={removeTeam}
                                        teamName={teamName}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
      );
}