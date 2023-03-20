import { Player } from "./types/DataTypes";

import PlayerPanel from './PlayerPanel';

interface PlayersListPanelType {
    players: Player[]
}

export default function PlayersListPanel({
    players,
}: PlayersListPanelType) {
    return (
        <ul>
            {players.map((player, index) => (
                <li key={index}>
                    <PlayerPanel
                        player={player}
                    />
                </li>
            ))}
        </ul>
    )
}