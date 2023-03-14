import { useState } from 'react';

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
                className="p-1"
                onChange={(event) => setPlayer(event.target.value)}
                type="text"
                value={player}
            />
            <button
                className="bg-indigo-100 p-1"
                onClick={addNewPlayer}
            >Submit</button>
        </>
    );
}