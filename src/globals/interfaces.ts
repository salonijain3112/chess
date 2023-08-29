export interface GlobalAppState {
    fen: string,
    currentPlayer: string
}

export interface fenUpdatePayload {
    fen: string;
}

export interface currentPlayerPayload {
    currentPlayer: string;
}