import React, { useState, useEffect } from "react";
import Chessboard from "../../components/ChessBoard/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar/SpectatorSideBar.js";
import "./MainGame.css";
import Header from "../../components/Header/Header.js";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router";
import axios from "../../axios/axiosInstance";
import { useUser } from "../../contexts/UserContext";

const MainGame = () => {
  const [commentDisplay, setCommentDisplay] = useState(false);
  const [gameData, setGameData] = useState({});
  const { userData, loginUser } = useUser();

  const { id } = useParams();

  useEffect(() => {
    getGamebyID();
    loginUser();

    // When a user loads this page
    registerUserAsSpectator();

    // When a user is about to close this page
    return () => {
      removeUserAsSpectator();
    };
  }, []);

  // Add the user as a spectator from DB
  const registerUserAsSpectator = async () => {
    const sample_data = {
      user_id: userData.id,
      game_id: id,
      user_name: userData.first_name,
      image_url: "string",
    };

    const result = await axios.patch(
      "https://chess.zuri.chat/api/v1/game/watch",
      sample_data
    );
  };

  // Remove the user as a spectator from DB
  const removeUserAsSpectator = async () => {
    const sample_data = {
      user_id: "7837488",
      game_id: id,
    };

    const result = await axios.patch(
      "https://chess.zuri.chat/api/v1/game/unwatch",
      sample_data
    );
  };

  async function getGamebyID() {
    try {
      const game = await axios.get(`game/${id}`);
      // Set gamesData state to response
      setGameData(game.data);
    } catch (err) {
      // console.log(err);
    }
  }

  return (
    <section className="main-game">
      <div className="main-chess">
        <Header setDisplay={setCommentDisplay} />
        {/* To watch game */}
        {gameData.data && <Chessboard type="spectator" gameData={gameData} />}
      </div>
      {/* To watch game */}

      <BrowserRouter>
        <SpectatorSideBar
          display={commentDisplay}
          setDisplay={setCommentDisplay}
        />
      </BrowserRouter>
    </section>
  );
};

export default MainGame;
