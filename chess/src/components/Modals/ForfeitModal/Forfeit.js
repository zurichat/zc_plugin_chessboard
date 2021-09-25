import Logo from "../../../assets/modal/profile_img.svg";
import Close from "../../../assets/modal/close.svg";
// import "./Forfeit.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

//import style-components
import { ForfeitContainer, ForfeitModal, ForfeitModalClose, ForfeitHeader, ForfeitContent, ForfeitFooter, ForfeitGameBtn } from "./ForfeitStyle";

const Forfeit = ({ isModalOpen, setmodalIsOpen, gameData }) => {

  const history = useHistory();
  const [gameId, setGameId] = useState(gameId);
  const close = () => setmodalIsOpen(false);

  useEffect(() => {
    setGameId(gameData._id);
  }, []);

  const forfeitGame = async () => {
    const gameEndData = {
      user_id: gameData.owner.user_id,
      game_id: gameId
    };

    const res = await axios.patch(
      "https://chess.zuri.chat/api/v1/game/end",
      gameEndData
    );

    if (res.data.success) {
      history.push("/");
    } else {
      //.
      console.log("Unable to end game " + res.data.message);
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <ForfeitContainer className="forfeit-container">
      <ForfeitModal className="forfeit-modal">
        <ForfeitModalClose className="btn-forfeit-modal-close" onClick={close}>
          <img className="" src={Close} alt="Close" />
        </ForfeitModalClose>
        <ForfeitHeader className="forfeit-header">
          <img className="profile" src={Logo} alt="profile" />
        </ForfeitHeader>

        <ForfeitContent className="forfeit-content">
          <h2 className="forfeit-content-text">
            Are you sure you want to forfeit the game?
          </h2>
        </ForfeitContent>
        <ForfeitFooter className="forfeit-footer">
          <ForfeitGameBtn className="btn-forfeit-game">
            <button
              className="btn-forfeit-modal btn-accept-forfeit"
              // onClick={() => {
              //   history.push("/");
              // }}
              onClick={forfeitGame}
            >
              Accept
            </button>
          </ForfeitGameBtn>

          <ForfeitGameBtn className="btn-forfeit-game">
            <button
              className="btn-forfeit-modal btn-decline-forfeit"
              onClick={close}
            >
              Decline
            </button>
          </ForfeitGameBtn>
        </ForfeitFooter>
      </ForfeitModal>
    </ForfeitContainer>
  );
};

export default Forfeit;
