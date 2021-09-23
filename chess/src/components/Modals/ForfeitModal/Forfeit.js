import Logo from "../../../assets/modal/profile_img.svg";
import Close from "../../../assets/modal/close.svg";
import "./Forfeit.css";
import { useHistory } from "react-router-dom";

const Forfeit = ({ isModalOpen, setmodalIsOpen, handleClick }) => {

  const close = () => setmodalIsOpen();

  const history = useHistory();
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="forfeit-container">
      <div className="forfeit-modal">
        <button className="btn-forfeit-modal-close" onClick={close}>
          <img className="" src={Close} alt="Close" />
        </button>
        <div className="forfeit-header">
          <img className="profile" src={Logo} alt="profile" />
        </div>

        <div className="forfeit-content">
          <h2 className="forfeit-content-text">
            Are you sure you want to forfeit the game?
          </h2>
        </div>
        <footer className="forfeit-footer">
          <div className="btn-forfeit-game">
            <button
              className="btn-forfeit-modal btn-accept-forfeit"
              onClick={() => {
                history.push("/");
              }}
            >
              Accept
            </button>
          </div>

          <div className="btn-forfeit-game">
            <button
              className="btn-forfeit-modal btn-decline-forfeit"
              onClick={close}
            >
              Decline
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Forfeit;
