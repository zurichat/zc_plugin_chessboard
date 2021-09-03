import React from "react";
import {Link} from 'react-router-dom'
import "./MiniBoard.css";
import boardImg from "../../assets/mini-board.png"

function MiniBoard({ id, playerOne, playerTwo }) {
  return (
    <div className="mini-board">
      <div className="asideBar topBar">
        {playerOne ? (
          <div className="playerProfile playerOne">
            <div className="profile-image"></div>
            <div className="profile-image-bg"></div>
            <p>Player 1: @{playerOne}</p>
          </div>
        ) : (
          <Link to='/game'><button className="join-button">Join as Player 1</button></Link>
        )}
      </div>

      <div className="board-image">
       <a href="#"><img src={boardImg} alt=""/> </a>
      </div>
      <div className="asideBar bottomBar">
        {playerTwo ? (
          <div className="playerProfile playerTwo">
            <div className="profile-image"></div>
            <div className="profile-image-bg"></div>
            <p>Player 2: @{playerTwo}</p>
          </div>
        ) : (
          <Link to='/game'><button className="join-button">Join as Player 2</button></Link>
        )}
      </div>
    </div>
  );
}

export default MiniBoard;
