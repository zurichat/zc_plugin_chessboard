import { Link } from "react-router-dom";

// Import CSS for this page
// import "./gamewinnermodal.css";

// Import Assets
import winner_image from "../../assets/modal/winner_image.png";

//import style-components
import { ModalWrapper, ModalBackdrop, ModalBox, ModalContent, Button, } from "./GameWinnerModalStyle";

const GameWinnerModal = ({ winner }) => {
  return (
    <ModalWrapper className="modal-wrapper">
      <ModalBackdrop className="modal-backdrop" />
      <ModalBox className="modal-box">
        <div className="modal-profile">
          <div className="modal-img">
            <img src={winner_image} alt="winner-image" />
          </div>
        </div>
        <ModalContent className="modal-content">
          <p>
            <span>Congratulations to </span> {winner.user_name}!
          </p>
          <p>The winner of this Game</p>
        </ModalContent>
        <div className="btn-group">
          <Button className="btn">
            <Link to="/" className="button-1">
              <button className="request-challenge-btn">
                Request another Challenge
              </button>
            </Link>

            <Link to="/" className="button-2">
              <button className="exit-btn">Exit</button>
            </Link>
          </Button>
        </div>
      </ModalBox>
    </ModalWrapper>
  );
};

export default GameWinnerModal;
