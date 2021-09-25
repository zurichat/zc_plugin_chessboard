import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// Import CSS for this page
import "./miniboard.css";

// Import Assets
import MiniBoardImage from "../../assets/miniboard/mini-board.svg";

import { createGame, joinGame } from "../../adapters/miniboard";
import { getLoggedInUserData } from "../../adapters/auth";

function MiniBoard({ playerOne, playerTwo, game_id }) {
  const history = useHistory();

  const HandleCreateGame = () => {
    createGame().then((response) => {
      if (response.data.success) {
        const game_id = response.data.data.object_id;
        history.push(`/game/${game_id}`);
      } else {
        // TODO: Handle error with Toasts
        console.log("Unable to Create Game: ", response.data.message);
      }
    });
  };

  const HandleJoinGame = (game_id) => {
    joinGame(game_id).then((response) => {
      if (response.data.success) {
        const game_id = response.data.data.game_id;
        history.push(`/game/${game_id}`);
      } else {
        // TODO: Handle error with Toasts
        console.log("Unable to Join Game: ", response.data.message);
      }
    });
  };

  return (
    <div className="mini-board">
      <div className="mini-asideBar mini-topBar">
        {playerOne ? (
          <div className="mini-playerProfile">
            <div
              className="mini-profile-image"
              style={{
                background: `url(${playerOne.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">
              Player 1: @{playerOne.user_name}
            </p>
          </div>
        ) : (
          <button className="join-button" onClick={HandleCreateGame}>
            Join as Player 1
          </button>
        )}
      </div>

      {game_id && playerOne ? (
        <Link to={`/game/${game_id}`}>
          <img src={MiniBoardImage} alt={`game-board-${game_id}`} />
        </Link>
      ) : (
        <img src={MiniBoardImage} alt={"game-board"} />
      )}

      <div className="mini-asideBar mini-bottomBar">
        {playerTwo && (
          <div className="mini-playerProfile">
            <div
              className="mini-profile-image"
              style={{
                background: `url(${playerTwo.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">
              Player 2: @{playerTwo.user_name}
            </p>
          </div>
        )}
        
        {playerOne &&
          !playerTwo &&
          getLoggedInUserData().user_id !== playerOne.user_id && (
            <button
              className="join-button bottom-button"
              onClick={() => HandleJoinGame(game_id)}
            >
              Waiting as Player 2
            </button>
          )}

        {playerOne &&
          !playerTwo &&
          getLoggedInUserData().user_id === playerOne.user_id && (
            <button className="join-button bottom-button">
              Waiting for Player 2
            </button>
          )}
      </div>
    </div>
  );
}

export default MiniBoard;
