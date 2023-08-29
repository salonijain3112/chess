import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Box from "./Box.tsx";
import "../styles/Game.css";

import {fenParser, moves} from "../helpers/Game.helper.ts";
import { RootState } from '../store';

const Game = () => {
    const [activeRow, setRow] = useState<number>(0);
    const [activeCol, setCol] = useState<number>(0);
    const [active, setActive] = useState(true);
    const fen = useSelector((state: RootState) => state.app.fen);
    const [parsedFen, setParsedFen] = useState<any[][]>([]);

    useEffect(() => {
        setParsedFen(fenParser(fen));
    }, [fen])

    const arrMoves = useMemo(() => {
        return moves(activeRow, activeCol, parsedFen, active);
    }, [activeRow, activeCol, parsedFen, active]);

    const handleClick = useCallback((r, c) => {
        if(r === activeRow && c === activeCol) {
            r="";
            c="";
        }
        if(arrMoves?.some(a => [r,c].every((v, i) => v === a[i]))){
            parsedFen[r][c] = parsedFen[activeRow][activeCol];
            parsedFen[activeRow][activeCol] = 0;
            setActive(!active);
        } 
        setRow(r);
        setCol(c);
    }, [setCol, setRow, setActive, active, arrMoves, parsedFen, activeRow, activeCol]);

    let Row: any = [];
    for(let i=0; i<8; i++){
        Row[i]=i;
    }
        

    return (
        <>
            <div className='rows'>
                {parsedFen.length > 0 &&
                    Row.map(r => {
                        return <div>
                            {Row.map(c => {
                                return (
                                <button onClick={() => handleClick(r,c)} className='btn'>
                                    <Box 
                                        r={r} 
                                        c={c} 
                                        fen={parsedFen} 
                                        viableMoves={arrMoves} 
                                        active={active}
                                    ></Box>
                                </button>)
                                })
                            }
                        </div>
                    })
                }
            </div>
            <div className='users'>
                <div className='user-box' style={{border: active?"":"3px solid green"}}>
                    <div className='profile-box black'>
                        <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-avatar-graphic-design-xnimrodx-lineal-color-xnimrodx.png" className='profile-pic'/>
                    </div>
                    <span className='player-name'>Player 1</span>
                </div>
                <div className='user-box' style={{border: active?"3px solid green":""}}>
                    <div className='profile-box white'>
                        <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-avatar-virus-and-hacker-xnimrodx-lineal-color-xnimrodx.png" className='profile-pic'/>
                    </div>
                    <span className='player-name'>Player 2</span>
                </div>
            </div>
        </>
    )
}

export default Game;
