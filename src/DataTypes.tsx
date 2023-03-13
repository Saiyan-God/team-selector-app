export interface Player {
    name: string,
    team?: string
}

export interface TeamDirectory {
    // name: string,
    // players: Player[]
    [key: string]: Player[]
}