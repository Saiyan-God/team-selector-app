import { Player } from "./DataTypes";
import { useAppDispatch } from './redux/hooks';
import { removePlayer } from "./redux/playerList";

interface PlayersPanelType {
    player: Player,
}

export default function PlayerPanel({
    player,
}: PlayersPanelType) {

    const dispatch = useAppDispatch();

    const removePlayerFromState = () => {
        dispatch(removePlayer({
            id: player.id
        }));
    }

    return (
        <>
            <div className="flex flex-row">
                <p className="basis-3/4">{player.name}</p>
                <button className="basis-1/4 hover:bg-indigo-100 hover:rounded" onClick={removePlayerFromState}>Delete</button>
            </div>
        </>
    )
}