import { Player } from "./types/DataTypes";
import { useState } from 'react';
import { useAppDispatch } from './redux/hooks';
import { removePlayer, selectPlayer } from "./redux/playerList";
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

    const highlightPlayer = (highlight: boolean) => {
        dispatch(selectPlayer({
            id: player.id,
            selected: highlight
        }));
    };

    const hoverOver = () => {
        setHover(true);
        highlightPlayer(true);
    }
    const hoverOut = () => {
        setHover(false);
        highlightPlayer(false);
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