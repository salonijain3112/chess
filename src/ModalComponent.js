import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Bishop from "./Images/bishop.svg";
import Knight from "./Images/knight.svg";
import Queen from "./Images/queen.svg";
import Rook from "./Images/rook.svg";
import BishopW from "./Images/bishopW.svg";
import KnightW from "./Images/knightW.svg";
import QueenW from "./Images/queenW.svg";
import RookW from "./Images/rookW.svg";

const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pawn Promotion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>You can promote your pawn to either of the following:</h4>
        {!props.active ? 
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <img src={Queen} alt="piece" style={{width: "100px", padding: "5px 22px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
          <img src={Rook} alt="piece" style={{width: "100px", padding: "5px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
          <img src={Bishop} alt="piece" style={{width: "100px", padding: "5px 32px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
          <img src={Knight} alt="piece" style={{width: "100px", padding: "5px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
        </div>
        :
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <img src={QueenW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "5px 20px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
          <img src={RookW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "5px 30px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
          <img src={BishopW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "5px 32px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
          <img src={KnightW} alt="piece" style={{width: "100px", backgroundColor: "black", padding: "5px 25px", cursor: "pointer", border: "2px solid black", borderRadius: "5px"}}/>
        </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide} style={{}}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;