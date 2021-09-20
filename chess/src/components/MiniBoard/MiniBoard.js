import React from "react";
import { Link } from "react-router-dom";
import "./MiniBoard.css";
import boardImg from "../../assets/mini-board.svg";
import { useHistory } from "react-router";
import axios from "axios";
// import { GetUserInfo } from "@zuri/zuri-control";

// function MiniBoard({ id, playerOne, playerTwo }) {
function MiniBoard({ playerOne, playerTwo, id, userPerson }) {
  const history = useHistory();
  console.log(userPerson);
  // if (userPerson) {
  //   GetUserInfo();
  // }
  const createGame = async () => {
    const sample_data = {
      user_id: userPerson.id,
      user_name: userPerson.first_name,
      image_url: "string",
    };

    const result = await axios.post(
      "https://chess.zuri.chat/api/v1/game/create",
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
      user_id: userPerson.id,
      game_id: id,
      user_name: userPerson.first_name,
      image_url: "string",
    };

    const result = await axios.post(
      "https://chess.zuri.chat/api/v1/game/join",
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
