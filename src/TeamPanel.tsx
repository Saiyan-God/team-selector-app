import { useState } from 'react';

import { Player, Team } from "./types/DataTypes";
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { removeTeam } from "./redux/teamDirectory";
import DeleteButton from './DeleteButton';

interface TeamPanelType {
    team: Team
}

// const backgroundColors = [
//     // 'bg-white',
//     'bg-slate-500',
//     'bg-stone-500',
//     'bg-red-500',
//     'bg-orange-500',
//     'bg-amber-500',
//     'bg-yellow-500',
//     'bg-lime-500',
//     'bg-green-500',
//     'bg-emerald-500',
//     'bg-teal-500',
//     'bg-cyan-500',
//     'bg-sky-500',
//     // 'bg-blue-500',
//     'bg-indigo-500',
//     'bg-violet-500',
//     'bg-purple-500',
//     'bg-fuchsia-500',
//     'bg-pink-500',
//     'bg-rose-500',
// ];
const colors = [
    // 'bg-white',
    'bg-slate',
    'bg-stone',
    'bg-red',
    'bg-orange',
    'bg-amber',
    'bg-yellow',
    'bg-lime',
    'bg-green',
    'bg-emerald',
    'bg-teal',
    'bg-cyan',
    'bg-sky',
    // 'bg-blue',
    'bg-indigo',
    'bg-violet',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-rose',
];

const colorNormal = '500';

function getRandomColor() {
    let colorIndex = Math.floor(Math.random()*colors.length);
    if(colorIndex === colors.length) {
        colorIndex -= 1;
    }
    return colors[colorIndex];
}

export default function TeamPanel({
    team,
}: TeamPanelType) {
    let [primaryColor, _setPrimaryColor] = useState(getRandomColor());
    
    const { players: playersList } = useAppSelector((state) => state.playerList);
    const teamPlayers: Player[] = [];
    team.players.forEach(player => {
        if(playersList[player]){
            teamPlayers.push(playersList[player]);
        }
     });

    const dispatch = useAppDispatch();

    const removeTeamFromState = () => {
        dispatch(removeTeam({
            id: team.id
        }));
    }

    const backgroundColor = `${primaryColor}-${colorNormal}`;
    // const highlightColor = `${primaryColor}-${colorHighlight}`;
    const highlightColor = 'bg-white';

    return (
        <div className={`${backgroundColor} rounded m-2 border-black border-4 p-2`}>
            <div className="flex flex-row">
                <p className="basis-full">{team.name}</p>
                <DeleteButton onClick={removeTeamFromState}/>
            </div>
            <ul>
                {teamPlayers.map(player => {
                    return (
                    <li
                        className={`indent-2 ${player.selected ? `${highlightColor} rounded` : ''}`}
                        key={player.id}
                    >{player.name}</li>);

                })}
            </ul>
        </div>
    )
}