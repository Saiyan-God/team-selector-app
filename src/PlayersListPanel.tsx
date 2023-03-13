import { Player } from "./DataTypes";

import PlayerPanel from './PlayerPanel';

interface PlayersListPanelType {
    players: Player[],
    removePlayer: (index: number) => any,
}

export default function PlayersListPanel({
    players,
    removePlayer,
}: PlayersListPanelType) {
    return (
        <>
            <ul>
                {/* {players.map((player, index) => <li key={index}>{player.name}</li>)} */}
                {players.map((player, index) => (
                    <li key={index}>
                        <PlayerPanel 
                            index={index}
                            player={player}
                            removePlayer={removePlayer}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}