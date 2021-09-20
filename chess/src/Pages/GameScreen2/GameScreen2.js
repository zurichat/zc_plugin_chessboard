import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ExitButton from "../../components/Button/ExitButton";
import ForfeitButton from "../../components/Button/forfeitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import Forfeit from "../../components/Modals/ForfeitModal/Forfeit";
import "./style.css";
import axios from "../../axios/axiosInstance";

const GameScreenWithComments = () => {
  const [openForfeitModal, setForfeitModal] = useState(false);
  const [gameData, setGameData] = useState({});

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };

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
      console.log(game.data);
    } catch (err) {
      // console.log(err);
    }
  }

  return (
    <main>
      <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      <div id="chessboard_container">
        <Header />
        {gameData.data && <ChessBoard type="player" gameData={gameData} />}
      </div>
      <div id="side_container">
        <div className="btn_container">
          {" "}
          <ForfeitButton handleClick={handleForfeitClick} />
        </div>
        <Comments />
      </div>
    </main>
  );
};

export default GameScreenWithComments;
