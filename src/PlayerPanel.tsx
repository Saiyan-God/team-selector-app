import { Player } from "./types/DataTypes";
import { useAppDispatch } from './redux/hooks';
import { removePlayer, toggleSelected } from "./redux/playerList";
import DeleteButton from "./DeleteButton";

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
    };

    const highlightPlayer = () => {
        dispatch(toggleSelected({
            id: player.id
        }));
    };

    return (
        <>
            <div className={`flex flex-row ${player.selected ? 'bg-white rounded': ''}`} onMouseOver={highlightPlayer} onMouseOut={highlightPlayer}>
                <p className="basis-full">{player.name}</p>
                <DeleteButton onClick={removePlayerFromState}/>
            </div>
        </>
    )
}