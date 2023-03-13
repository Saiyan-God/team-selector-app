import React,{ useRef, useState } from 'react';

interface NewPlayerType {
    addPlayer: (playerName: string) => any,
}

export default function NewPlayer({
    addPlayer
}: NewPlayerType) {

    let [player, setPlayer] = useState('');

    const addNewPlayer = () => {
        console.log(`adding new player: ${player}`);
        addPlayer(player);
        setPlayer('');
    }

    return (
        <>
            <p>Add new player:</p>
            <input
                onChange={(event) => setPlayer(event.target.value)}
                type="text"
                value={player}
            />
            <button onClick={addNewPlayer}>Submit</button>
        </>
    );
}