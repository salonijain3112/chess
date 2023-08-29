import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentPlayerPayload, fenUpdatePayload, GlobalAppState } from "../globals/interfaces";

export const initialAppState: GlobalAppState = {
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    currentPlayer: "white"
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    updateFen: (
        state: GlobalAppState,
        {
            payload: { newFen }
        }: PayloadAction<{ newFen: fenUpdatePayload }>
        ) => {
          state = { ...state, ...newFen };
        },
    setCurrentPlayer: (
        state: GlobalAppState,
        {
            payload: { newPlayer }
        }: PayloadAction<{ newPlayer: currentPlayerPayload }>
        ) => {
            state = { ...state, ...newPlayer };
        }
    }
});

export const {
    updateFen,
    setCurrentPlayer
} = appSlice.actions;

export const selectAppState = (state: GlobalAppState) => state;

export default appSlice;
