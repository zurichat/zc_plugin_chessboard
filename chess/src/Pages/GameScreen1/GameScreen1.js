import React, { useState, useEffect } from "react";

import ExitButton from "../../components/Button/ExitButton";
import LeaveButton from "../../components/Button/LeaveButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
// import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import Exit from "../../components/Modals/ExitModal/Exit";
import "./GameScreen1.css";
import { useParams } from "react-router";
import axios from "../../axios/axiosInstance";
import profileOne from "../../assets/Rectangle 892.png";
import LeftArrow from "../../assets/left-arrow.png";

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
      console.log(game.data);
      //console.log(game.data);
    } catch (err) {
      console.log(err);
    }
  }
  const [openForfeitModal, setForfeitModal] = useState(false);

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };

  return (
    <main id="game__screen__main">
      <Exit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      {/* <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} /> */}

      <div id="chessboard_container">
        <div className="gameheader-container">
          <Header />
        </div>
        <ChessBoard type="player"/>
      </div>

      <div id="side_container">
        {/* <div className="btn_container"> */}{" "}
        {/* <ForfeitButton handleClick={handleForfeitClick} /> */}
        {/* </div> */}
        <div className="title">
          <h1>Comments</h1>
        </div>
        <div className="dummy">{/* comments can go in here */}</div>
        <div className="exit_btn_container">
          <ExitButton handleClick={handleForfeitClick} />
        </div>
      </div>
    </main>
  );
};

export default GameScreenWithoutComments;
