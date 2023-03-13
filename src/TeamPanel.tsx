import { Player } from "./DataTypes"

interface TeamPanelType {
    teamName: string,
    removeTeam: (teamName: string) => any,
    players: Player[] | null
}

export default function TeamPanel({
    players,
    removeTeam,
    teamName,
}: TeamPanelType) {

    const deleteTeam = () => {
        console.log(`deleting team ${teamName}`);
        removeTeam(teamName);
    }
    return (
        <>
        <div className="flex flex-row">
            <p className="basis-1/2">{teamName}</p>
            <button className="basis-1/2" onClick={deleteTeam}>Delete</button>
        </div>
            <ul>
                {players?.map((player, index) => {
                    return (<li className="indent-2" key={index}>{player.name}</li>);
                })}
            </ul>
        </>
    )
}