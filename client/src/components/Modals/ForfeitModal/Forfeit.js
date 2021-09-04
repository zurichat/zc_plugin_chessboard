import { createPortal } from "react-dom";
import Logo from "./profile.png";
import "./Forfeit.css";
import { useHistory } from "react-router-dom";
const Forfeit = ({ isYes, onClose }) => {
  let history = useHistory();
  if (!isYes) {
    return null;
  }
  return createPortal(
    <div className="forfeit-container">
      <div className="forfeit-modal">
        <header className="forfeit-header">
          <div className="profile">
            <img src={Logo} alt="profile" />
          </div>
        </header>
        <main className="forfeit-content">
          <h2 className="forfeit-content-title">
            Are you sure you want to forfeit the game?
          </h2>
        </main>
        <footer className="forfeit-footer">
          <button
            className="btn yes"
            onClick={() => {
              history.push("/");
            }}
          >
            Yes
          </button>
          <button className=" btn no" onClick={onClose}>
            No
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById("forfeit")
  );
};

export default Forfeit;
