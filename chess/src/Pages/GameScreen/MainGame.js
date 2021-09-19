
import React, { useState, useEffect } from "react";
import Chessboard from "../../components/ChessBoard/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar/SpectatorSideBar.js";
import "./MainGame.css";
import Header from "../../components/Header/Header.js";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router";
import axios from "../../axios/axiosInstance";

const MainGame = () => {

  const [commentDisplay, setCommentDisplay] = useState(false);
  const [gameData, setGameData] = useState({});

  const game_id = useParams();

  useEffect(() => {
    getGamebyID();
  }, []);
  async function getGamebyID() {
    try {
      const game = await axios.get(`game/${game_id.id}`);
      // Set gamesData state to response
      setGameData(game.data);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="main-game">
      <div className="main-chess">
        <Header setDisplay={setCommentDisplay}  />
        {/* To watch game */}
        {
          gameData.data && <Chessboard type="spectator" gameData={ gameData } />
        }
       
      </div>
       {/* To watch game */}

      <BrowserRouter>
        <SpectatorSideBar display={commentDisplay} setDisplay={setCommentDisplay}  />
      </BrowserRouter>
    </section>
    
  );
};

export default MainGame;
