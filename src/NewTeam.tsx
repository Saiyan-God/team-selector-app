import React,{ useRef, useState } from 'react';

interface NewTeamType {
    addTeam: (teamName: string) => any,
}

export default function NewTeam({
    addTeam
}: NewTeamType) {

    let [team, setTeam] = useState('');

    const addNewTeam = () => {
        console.log(`adding new team: ${team}`);
        addTeam(team);
        setTeam('')
    }

    return (
    <>
        <p>Add new team:</p>
            <input
                className="p-1"
                onChange={(event) => setTeam(event.target.value)}
                type="text"
                value={team}
            />
            <button
                className="bg-indigo-100 p-1"
                onClick={addNewTeam}
            >Submit</button>
    </>
    )
}