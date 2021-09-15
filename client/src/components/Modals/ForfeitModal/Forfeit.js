
import Logo from "./profile.svg";
import "./Forfeit.css";
import { useHistory } from "react-router-dom";

const Forfeit = ({ isYes, handleClick }) => {
  let history = useHistory();
  if (!isYes) {
    return null;
  }

  return (
    <div className="forfeit-container">
      <div className="forfeit-modal">
        <div className="forfeit-header">
            <img className="profile" src={Logo} alt="profile" />
        </div>

        <div className="forfeit-content">
          <h2 className="forfeit-content-text">
            Are you sure you want to forfeit the game?
          </h2>
        </div>
        <footer className="forfeit-footer">
          <div className="cp">
            <button
            className=" btn continue"
            onClick={() => handleClick()}
          >
            Continue Playing
          </button>
          </div>
          
          <div className="ys">
            <button
            className="btn yes"
            onClick={() => {
              history.push("/");
            }}
          >
            Yes
          </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Forfeit;