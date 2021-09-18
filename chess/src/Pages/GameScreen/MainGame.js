import Chessboard from "../../components/ChessBoard/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar/SpectatorSideBar.js";
import "./MainGame.css";
import Header from "../../components/Header/Header.js";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "../../axios/axiosInstance";

const MainGame = () => {

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

  return (
    <section className="main-game">
      <div className="main-chess">
        <Header />
        <Chessboard type="spectator" />
      </div>

      <BrowserRouter>
        <SpectatorSideBar />
      </BrowserRouter>
    </section>
  );
};

export default MainGame;
