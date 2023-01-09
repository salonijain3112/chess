import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Bishop from "../Images/bishop.svg";
import Knight from "../Images/knight.svg";
import Queen from "../Images/queen.svg";
import Rook from "../Images/rook.svg";
import BishopW from "../Images/bishopW.svg";
import KnightW from "../Images/knightW.svg";
import QueenW from "../Images/queenW.svg";
import RookW from "../Images/rookW.svg";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const ModalComponent = (props) => {
  const { fen, r, c, show, onHide, active } = props;
  const [selectedPiece, setSelectedPiece] = useState(active ? "q": "Q");

  const handleClick = (selected) => {
    setSelectedPiece(selected);
  }

  const replacePawn = () => {
    if(selectedPiece !== ""){
      fen[r][c]=selectedPiece;
      onHide();
    }
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Pawn Promotion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hey Player! You can promote your pawn to either of the following:</h4>
        {active ? 
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1}>
              <img src={Queen} alt="piece" style={{width: "100px", padding: "5px 22px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={() => handleClick("q")}/>
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              <img src={Rook} alt="piece" style={{width: "100px", padding: "7px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={()=> handleClick("r")}/>
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              <img src={Bishop} alt="piece" style={{width: "100px", padding: "5px 32px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={()=> handleClick("b")}/>
            </ToggleButton>
            <ToggleButton id="tbg-radio-4" value={4}>
              <img src={Knight} alt="piece" style={{width: "100px", padding: "7px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={()=> handleClick("n")}/>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        :
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1}>
              <img src={QueenW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "5px 22px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={() => handleClick("Q")}/>
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              <img src={RookW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "7px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={()=> handleClick("R")}/>
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              <img src={BishopW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "5px 32px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={()=> handleClick("B")}/>
            </ToggleButton>
            <ToggleButton id="tbg-radio-4" value={4}>
              <img src={KnightW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "7px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}} onClick={()=> handleClick("N")}/>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={replacePawn} active>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;