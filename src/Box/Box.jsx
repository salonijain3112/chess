import React, { useState, useEffect } from 'react';
import "./Box.css";
import Bishop from "../Images/bishop.svg";
import Knight from "../Images/knight.svg";
import Pawn from "../Images/pawn.svg";
import King from "../Images/king.svg";
import Queen from "../Images/queen.svg";
import Rook from "../Images/rook.svg";
import BishopW from "../Images/bishopW.svg";
import KnightW from "../Images/knightW.svg";
import PawnW from "../Images/pawnW.svg";
import KingW from "../Images/kingW.svg";
import QueenW from "../Images/queenW.svg";
import RookW from "../Images/rookW.svg";
import ModalComponent from '../ModalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = ({r, c, fen, viableMoves, active}) => {
    const [glow, setGlow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(()=> {
        const check = viableMoves.filter(arr => (arr[0] === r && arr[1] === c));
        if(check.length > 0){
            setGlow(true);
        }else{
            setGlow(false);
        }
    });
    const [img, setImg] = useState("");
    const [clName, setClassName] = useState("");

    useEffect(() => {
        switch (fen) {
            case "r":
                setImg(Rook);
                setClassName("rook");
                break;
            case "b":
                setImg(Bishop);
                setClassName("bishop");
                break;
            case "n": 
                setImg(Knight);
                setClassName("knight");
                break;
            case "k": 
                setImg(King);
                setClassName("king");
                break;
            case "q": 
                setImg(Queen);
                setClassName("queen");
                break;
            case "p": 
                setImg(Pawn);
                setClassName("pawn");
                break;
            case "R":
                setImg(RookW);
                setClassName("rook");
                break;
            case "B":
                setImg(BishopW);
                setClassName("bishop");
                break;
            case "N": 
                setImg(KnightW);
                setClassName("knight");
                break;
            case "K": 
                setImg(KingW);
                setClassName("king");
                break;
            case "Q": 
                setImg(QueenW);
                setClassName("queen");
                break;
            case "P": 
                setImg(PawnW);
                setClassName("pawn");
                break;
            default: 
                setImg("");
            
        }
    })
    const handleShow = () => {
        if((!active && fen === "p" && r===6) || (active && r===1 && fen === "P"))
        setModalShow(true);
    }
    return (
        <>
            <div className={(r+c)%2==0 ? `creamBox + ${glow ? "glow":""}` : `orangeBox + ${glow ? "glow":""}`} onClick={handleShow}>
                    {img !== "" && <img src={img} className={clName} alt="piece"/>}
            </div>
            <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                active={active}
            />
        </>
    )
}

export default Box;
