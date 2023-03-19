export interface Player {
    name: string,
    id: string,
    team?: string
}

export interface PlayerList { 
    players: {[key: string]: Player}
}

export interface Team {
    name: string,
    id: string,
    players: Player[]
}

export interface TeamDirectory {
    [key: string]: Team
}