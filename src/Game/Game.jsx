import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Box from '../Box';
import "./Game.css";

import {fenParser, moves} from "./Game.helper.js";

const Game = () => {
    const [activeRow, setRow] = useState("");
    const [activeCol, setCol] = useState("");
    const [fen, setFen] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if(fen.length === 0){
            setFen(fenParser("r1b1k1nr/p2p1pNp/n3B3/2pNP2P/r5P1/3P1Q2/P1P1K3/q4rb1"));
        }
    }, [fen]);
    
    const arrMoves = useMemo(() => {
        return moves(activeRow, activeCol, fen, active);
    }, [activeRow, activeCol, fen, active]);

    const handleClick = useCallback((r, c) => {
        console.log("row", active, fen[r][c], r)
        if(r === activeRow && c === activeCol) {
            r="";
            c="";
        }
        if(arrMoves?.some(a => [r,c].every((v, i) => v === a[i]))){
            fen[r][c] = fen[activeRow][activeCol];
            fen[activeRow][activeCol] = 0;
            setActive(!active);
        } 
        setRow(r);
        setCol(c);
    }, [setCol, setRow, setActive, active, arrMoves, fen, activeRow, activeCol]);

    const Row = [];
    for(let i=0; i<8; i++){
        Row[i]=i;
    }
        

    return (
        <>
            <div className='rows'>
                {fen.length > 0 &&
                    Row.map(r => {
                        return <div>
                            {Row.map(c => {
                                let showModal = false;
                                // console.log("row", active, fen[r][c], r)
                                if((fen[r][c] === "p" && r===7) || (r===0 && fen[r][c] === "P")) {
                                    showModal=true;
                                } else {
                                    showModal=false;
                                }
                                return (
                                <button onClick={() => handleClick(r,c)} className='btn'>
                                    <Box 
                                        r={r} 
                                        c={c} 
                                        fen={fen[r][c]} 
                                        viableMoves={arrMoves} 
                                        active={active}
                                        showModal={showModal}
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
