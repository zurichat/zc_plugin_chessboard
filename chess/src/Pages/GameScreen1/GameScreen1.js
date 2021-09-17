import React, { useState, useEffect } from "react";

import ExitButton from "../../components/Button/ExitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Exit from "../../components/Modals/ExitModal/Exit";
import "./GameScreen1.css";
import { useParams } from "react-router";
import axios from "../../axios/axiosInstance";

const GameScreenWithoutComments = () => {
  const [gameData, setGameData] = useState({});

  const game_id = useParams();
  console.log(game_id);
  useEffect(() => {
    getGamebyID();
  }, []);
  async function getGamebyID() {
    try {
      const game = await axios.get(`game/${game_id.id}`);
      // Set gamesData state to response
      setGameData(game.data);
      console.log(gameData?.data);
    } catch (err) {
      console.log(err);
    }
  }
  const [openForfeitModal, setForfeitModal] = useState(false);

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };

  return (
    <main>
      <Exit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      {/* <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} /> */}
      <div id="chessboard_container">
        <ChessBoard type="player" gameData={gameData} />
      </div>
      <div id="side_container">
        <div className="btn_container">
          {" "}
          <ExitButton handleClick={handleForfeitClick} />
          {/* <ForfeitButton handleClick={handleForfeitClick} /> */}
        </div>
        <div className="title">Comments</div>
      </div>
    </main>
  );
};

export default GameScreenWithoutComments;
