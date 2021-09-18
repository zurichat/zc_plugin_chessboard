import React, {useState} from "react";
import Chessboard from "../../components/ChessBoard/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar/SpectatorSideBar.js";
import "./MainGame.css";
import Header from "../../components/Header/Header.js";
import { BrowserRouter } from "react-router-dom";



const MainGame = ({display, setDisplay}) => {
  // console.log(display)
  return (
    <section className="main-game">
      <div className="main-chess">
        <Header display={display} setDisplay={setDisplay} />
        <Chessboard type="spectator" />
      </div>
      <BrowserRouter>
        <SpectatorSideBar display={display} setDisplay={setDisplay}  />
      </BrowserRouter>
    </section>
    
  );
};

export default MainGame;
