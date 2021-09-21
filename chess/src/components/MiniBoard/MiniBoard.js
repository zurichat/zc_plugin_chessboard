import React from "react";
import { Link } from "react-router-dom";
import "./MiniBoard.css";
import boardImg from "../../assets/mini-board.svg";
import { useHistory } from "react-router";
import axios from "axios";
import { BACKEND_DOMAIN } from "../../config";

// function MiniBoard({ id, playerOne, playerTwo }) {
function MiniBoard({ playerOne, playerTwo, id }) {
  const history = useHistory();
  const createGame = async () => {
    const sample_data = {
      user_id: "1234567",
      user_name: "codeJonin",
      image_url: "string",
    };

    const result = await axios.post(
      `${BACKEND_DOMAIN}/api/v1/game/create`,
      sample_data
    );

    if (result.data.success) {
      const game_id = result.data.data.object_id;
      history.push(`/game_nocomments/${game_id}`);
    } else {
      //....
    }
  };

  const joinGame = async () => {
    const sample_data = {
      user_id: "player-2-1234567",
      game_id: id,
      user_name: "michael",
      image_url: "string",
    };

    const result = await axios.post(
      `${BACKEND_DOMAIN}/api/v1/game/join`,
      sample_data
    );

    if (result.data.success) {
      const game_id = result.data.data.game_id;
      history.push(`/game_comments/${game_id}`);
    } else {
      //....
    }
  };

  // Proceed them to spectator page with game_id
  const proceedTowatchGame = async () => {
    history.push(`/game/${id}`);
  };

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
          <button className="join-button" onClick={createGame}>
            Join as Player 1
          </button>
        )}
      </div>

      <div className="board-image" onClick={proceedTowatchGame}>
        {/* eslint-disable-next-line */}
        <img src={boardImg} alt="" />{" "}
      </div>
      <div className="mini-asideBar mini-bottomBar">
        {playerTwo && (
          <div className="mini-playerProfile">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">Player 2: @{playerTwo}</p>
          </div>
        )}
        {playerOne && !playerTwo && (
          <button className="join-button bottom-button" onClick={joinGame}>
            Join as Player 2
          </button>
        )}
      </div>
    </div>
  );
}

export default MiniBoard;
