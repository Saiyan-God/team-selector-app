import { useState } from 'react';
import { useAppDispatch } from './redux/hooks';
import { addPlayer} from './redux/playerList';

export default function NewPlayer() {

    let [player, setPlayer] = useState('');
    
    const dispatch = useAppDispatch();

    const addNewPlayerToState = () => {
        if(player != null || player !== '') {
            dispatch(addPlayer({
                playerName: player
            }));
            setPlayer('');
        }
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
                onClick={addNewPlayerToState}
            >Submit</button>
        </>
    );
}