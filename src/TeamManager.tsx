import { useAppSelector, useAppDispatch } from './redux/hooks';
import { setPlayers } from "./redux/teamDirectory";

import { IoMdPerson } from 'react-icons/io';
import NewPlayer from './NewPlayer';
import NewTeam from './NewTeam';
import PlayersListPanel from './PlayersListPanel';
import TeamPanel from './TeamPanel';
import { shuffleArray } from './utilities/utils';


export function TeamManager() {
    const { players: playersList } = useAppSelector((state) => state.playerList);
    const teamDirectory = useAppSelector((state) => state.teamDirectory);
    
    const dispatch = useAppDispatch();

    const randomizeTeam = () => {
        const numTeams = Object.keys(teamDirectory).length;
        if(numTeams > 0) {
            const playersCopy = Object.values(playersList);
            shuffleArray(playersCopy);
            const newTeamsLineup: string[][] = new Array(numTeams).fill([]).map(() => new Array(0));
            let teamIndex = 0;
            for(let player of playersCopy) {
                newTeamsLineup[teamIndex++].push(player.id);
                if(teamIndex >= numTeams) {
                    teamIndex = 0;
                }
            }
            const teamsList = Object.keys(teamDirectory);
            const playerAssigment = [];
            for(let i = 0; i < numTeams; i++) {
                const teamId = teamDirectory[teamsList[i]].id;
                playerAssigment.push({
                    id: teamId,
                    players: newTeamsLineup[i],
                });
            }
            dispatch(setPlayers(playerAssigment));
        }
        else {
            console.log('No teams to assign players to');
        }
    }

    return (
        <>
            <div className='bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-400 font-mono font-bold h-screen'>
                <div className="flex p-6 bg-black text-white text-2xl items-center space-x-2">
                    <h1>
                        Team Selector
                    </h1>
                    <IoMdPerson className=' inline-block align-bottom'/>
                </div>
                <div className='flex flex-row space-x-4 p-4'>
                    <div className='basis-1/4 rounded bg-emerald-400 border-black border-4 p-4'>
                        <NewPlayer />
                        <NewTeam />
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
                            players={Object.values(playersList)}
                        />
                    </div>
                    <div className='basis-1/4 rounded bg-blue-400 border-black border-4 p-4'>
                        <h2>Teams:</h2>
                        <ul>
                            {Object.values(teamDirectory).map(team => (
                                <li key={team.id}>
                                    <TeamPanel
                                        team={team}
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