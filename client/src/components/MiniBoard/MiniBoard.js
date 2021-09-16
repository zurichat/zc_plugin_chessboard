import React from "react";
import { Link } from "react-router-dom";
import "./MiniBoard.css";
import boardImg from "../../assets/mini-board.svg";

// function MiniBoard({ id, playerOne, playerTwo }) {
function MiniBoard({ playerOne, playerTwo, playerWait}) {
  return (
    <div className="mini-board">
      <div className="mini-asideBar mini-topBar">
        {playerOne ? (
          <div className="mini-playerProfile">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">Player 1: @{playerOne}</p>
          </div>
        ) : (
          <Link to="/game_nocomments">
            <button className="join-button" onClick={playerWait}>Join as Player 1</button>
          </Link>
        )}
      </div>

      <div className="board-image">
        {/* eslint-disable-next-line */}
        <a href="/game">
          <img src={boardImg} alt="" />{" "}
        </a>
      </div>
      <div className="mini-asideBar mini-bottomBar">
        {playerTwo ? (
          <div className="mini-playerProfile">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">Player 2: @{playerTwo}</p>
          </div>
        ) : (
          <Link to="/game_comments">
            <button className="join-button bottom-button" onClick={playerWait}>
              Join as Player 2
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MiniBoard;
