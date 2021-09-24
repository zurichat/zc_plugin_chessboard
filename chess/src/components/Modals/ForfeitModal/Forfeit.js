import Logo from "../../../assets/modal/profile_img.svg";
import Close from "../../../assets/modal/close.svg";
import "./Forfeit.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { CentrifugeSetup, getGameData } from "../../../adapters/game/index";

const Forfeit = ({ isModalOpen, setmodalIsOpen, gameData,  handleClick }) => {
  //get game id 
  const [gameId, setGameId] = useState(gameId);
  // console.log("Game data "+ gameData._id);


  useEffect(() => {
    setGameId(gameData._id);
    // console.log(gameId);
    // console.log(gameData.owner.user_id);
  }, []);

  const close = () => setmodalIsOpen();

  const forfeitGame = async () => {
    const gameEndData = {
      user_id: gameData.owner.user_id,
      game_id: gameId
    };

    const res = await axios.patch(
      "https://chess.zuri.chat/api/v1/game/end", 
        gameEndData
    );

    if(res.data.success) {
        history.push("/");
    }else{
      //.
      console.log("Unable to end game " + res.data.message);
    }  
  };

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
              // onClick={() => {
              //   history.push("/");
              // }}
              onClick={forfeitGame}
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
