import { useState } from 'react';

import { Player } from "./DataTypes"

interface TeamPanelType {
    teamName: string,
    removeTeam: (teamName: string) => any,
    players: Player[] | null
}

const backgroundColors = [
    'bg-white',
    'bg-slate-500',
    'bg-stone-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    // 'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-rose-500',
]

function getRandomColor() {
    let colorIndex = Math.floor(Math.random()*backgroundColors.length);
    if(colorIndex == backgroundColors.length) {
        colorIndex -= 1;
    }
    return backgroundColors[colorIndex];
}

export default function TeamPanel({
    players,
    removeTeam,
    teamName,
}: TeamPanelType) {

    const deleteTeam = () => {
        console.log(`deleting team ${teamName}`);
        removeTeam(teamName);
    }

    let [backgroundColor, setBackgroundColor] = useState(getRandomColor());
    console.log(backgroundColor);
    return (
        <div className={`${backgroundColor} rounded m-2 border-black border-4 p-2`}>
            <div className="flex flex-row">
                <p className="basis-3/4">{teamName}</p>
                <button className="basis-1/4 hover:bg-indigo-100 hover:rounded" onClick={deleteTeam}>Delete</button>
            </div>
            <ul>
                {players?.map((player, index) => {
                    return (<li className="indent-2" key={index}>{player.name}</li>);
                })}
            </ul>
        </div>
    )
}