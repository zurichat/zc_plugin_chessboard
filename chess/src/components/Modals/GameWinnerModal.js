import { Link } from "react-router-dom";

// Import CSS for this page
import "./gamewinnermodal.css";

// Import Assets
import winner_image from "../../assets/modal/winner_image.png";

const GameWinnerModal = ({ winner }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop" />
      <div className="modal-box">
        <div className="modal-profile">
          <div className="modal-img">
            <img src={winner_image} alt="winner-image" />
          </div>
        </div>
        <div className="modal-content">
          <p>
            <span>Congratulations to </span> {winner.user_name}!
          </p>
          <p>The winner of this Game</p>
        </div>
        <div className="btn-group">
          <div className="btn">
            <Link to="/" className="button-1">
              <button className="request-challenge-btn">
                Request another Challenge
              </button>
            </Link>

            <Link to="/" className="button-2">
              <button className="exit-btn">Exit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWinnerModal;
