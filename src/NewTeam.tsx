import { useState } from 'react';
import { useAppDispatch } from './redux/hooks';
import { addTeam } from './redux/teamDirectory';

export default function NewTeam() {

    let [team, setTeam] = useState('');
        
    const dispatch = useAppDispatch();

    const addNewTeamToState = () => {
        if(team != null || team !== '') {
            dispatch(addTeam({
                teamName: team
            }));
            setTeam('');
        }
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
            onClick={addNewTeamToState}
        >Submit</button>
    </>
    )
}