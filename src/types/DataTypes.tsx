export interface Player {
    name: string,
    id: string,
    team?: string,
    selected?: boolean
}

export interface PlayerList { 
    players: {[key: string]: Player}
}

export interface Team {
    name: string,
    id: string,
    players: string[]
}

export interface TeamDirectory {
    [key: string]: Team
}