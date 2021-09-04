import React from "react";
import { Link } from "react-router-dom";
import "./MiniBoard.css";
import boardImg from "../../assets/mini-board.png";

// function MiniBoard({ id, playerOne, playerTwo }) {
function MiniBoard({ playerOne, playerTwo }) {
  return (
    <div className="mini-board">
      <div className="mini-asideBar mini-topBar">
        {playerOne ? (
          <div className="mini-playerProfile">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p>Player 1: @{playerOne}</p>
          </div>
        ) : (
          <Link to="/game">
            <button className="join-button">Join as Player 1</button>
          </Link>
        )}
      </div>

      <div className="board-image">
        {/* eslint-disable-next-line */}
        <a href="#">
          <img src={boardImg} alt="" />{" "}
        </a>
      </div>
      <div className="mini-asideBar mini-bottomBar">
        {playerTwo ? (
          <div className="mini-playerProfile playerTwo">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p>Player 2: @{playerTwo}</p>
          </div>
        ) : (
          <Link to="/game">
            <button className="join-button bottom-button">
              Join as Player 2
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MiniBoard;
