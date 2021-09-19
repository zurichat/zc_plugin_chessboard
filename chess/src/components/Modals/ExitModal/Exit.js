// import { createPortal } from "react-dom";
import React, {useState, useEffect} from "react";
import Logo from "./profile.png";
import "./Exit.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

// const Forfeit = ({ isYes, onClose }) => {

const Exit = ({ isYes, handleClick, gameData }) => {
  let history = useHistory();
  if (!isYes) {
    return null;
  }
  // return createPortal(
const [gameId, setGameId] = useState(gameId);

useEffect(() => {
  
  
  setGameId(gameData.data._id);
  console.log(gameId);
        
}, []);



    const exitGame = async () => {
      const gameEndData = {
        user_id: gameData.data.owner.user_id,
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
            onClick={() => handleClick()}
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
