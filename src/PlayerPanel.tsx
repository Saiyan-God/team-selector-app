import { Player } from "./DataTypes";

interface PlayersPanelType {
    index: number,
    player: Player,
    removePlayer: (index: number) => any,
}

export default function PlayerPanel({
    index,
    player,
    removePlayer
}: PlayersPanelType) {

    const deletePlayer = () => {
        console.log(index);
        removePlayer(index);
    }
    return (
        <>
            <div className="flex flex-row">
                <p className="basis-1/2">{player.name}</p>
                <button className="basis-1/2" onClick={deletePlayer}>Delete</button>
            </div>
        </>
    )
}