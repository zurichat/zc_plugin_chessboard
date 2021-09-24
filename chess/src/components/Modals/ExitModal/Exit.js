import React, {useState, useEffect} from "react";
import Logo from "./profile.png";
import Close from "../../../assets/modal/close.svg";
import "./Exit.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Exit = ({ isOpen, setIsOpen, handleButton, gameData }) => {

  const close = () => setIsOpen();

  let history = useHistory();
  if (!isOpen) {
    return null;
  }
  // return createPortal(
const [gameId, setGameId] = useState(gameId);

useEffect(() => {
  
  
  setGameId(gameData._id);
  console.log(gameData);
  

        
}, []);



    const exitGame = async () => {
      const gameEndData = {
        user_id: gameData.owner.user_id,
        game_id: gameId,       
      };

      const result = await axios.patch(
        "https://chess.zuri.chat/api/v1/game/end",
        gameEndData
      );
      if (result.data.success) {
        
        history.push("/");
      } else {
        //....
      }
      
    };

  return (
    <div className="exit__container">
      <div className="exit__modal">
      <button className="btn-exit-modal-close" onClick={close}>
          <img className="" src={Close} alt="Close" />
        </button>
        <article className="exit__header">
          <div className="exit__profile">
            <img src={Logo} alt="profile" />
          </div>
        </article>
        <section className="exit__content">
        
          <p className="exit__text">
            You are probably tired of waiting for player 2, are you sure you
            want to leave the game?
          </p>
        </section>
        <footer className="exit__footer">
          <button
            className="exit__button exit__button--yes"
           onClick = {exitGame}
          >
            Yes
          </button>
          <button
            className=" exit__button exit__button--no"
            onClick={close}
          >
            No
          </button>
        </footer>
      </div>
    </div>

    // ,document.getElementById("forfeit")
  );
};

export default Exit;