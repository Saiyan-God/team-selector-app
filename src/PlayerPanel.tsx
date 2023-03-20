import { Player } from "./types/DataTypes";
import { useState } from 'react';
import { useAppDispatch } from './redux/hooks';
import { removePlayer, toggleSelected } from "./redux/playerList";
import DeleteButton from "./DeleteButton";

interface PlayersPanelType {
    player: Player,
}

export default function PlayerPanel({
    player,
}: PlayersPanelType) {

    let [hover, setHover] = useState(false);

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

    const hoverOver = () => {
        setHover(true);
        highlightPlayer();
    }
    const hoverOut = () => {
        setHover(false);
        highlightPlayer();
    }

    return (
        <div
            className={`flex flex-row ${player.selected ? 'bg-white rounded': ''}`}
            onMouseOver={hoverOver}
            onMouseOut={hoverOut}>
            <p className="basis-full">{player.name}</p>
            {hover && <DeleteButton onClick={removePlayerFromState}/>}
        </div>
    )
}