import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { BrowserRouter, useParams } from "react-router-dom";

// Import CSS for this page
import "./game.css";

// Import Adaptors
import {
  CentrifugeSetup,
  getGameData,
  unwatchGame,
  watchGame,
} from "../../adapters/game";
import { getLoggedInUserData } from "../../adapters/auth";

// Import Components
import Header from "../../components/Header";
import ChessBoard from "../../components/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar";

function Game() {
  const [gameData, setGameData] = useState(null);
  const gameDataRef = useRef(null);
  const [canCallCentrifuge, setcanCallCentrifuge] = useState(false);
  const [canCallWatchGame, setcanCallWatchGame] = useState(false);
  const { game_id } = useParams();
  const history = useHistory();

  // Why this? checkout - https://stackoverflow.com/questions/63224151/how-can-i-access-state-in-an-useeffect-without-re-firing-the-useeffect
  useEffect(() => {
    gameDataRef.current = gameData;
  });

  useEffect(() => {
    // Get game data
    getGameData(game_id).then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        history.push("/");
        console.log("Unable to Get Game: ", response.data.message);
      } else {
        setGameData(response.data.data);
      }
    });

    setcanCallCentrifuge(true);
    setcanCallWatchGame(true);

    // If user is about to leave this game, unwatch - ComponentWillUnmount (Not the best right now, cause this is called for every user, instead of spectators only)
    return () => {
      if (
        gameDataRef.current.owner.user_id !== getLoggedInUserData().user_id &&
        gameDataRef.current.opponent?.user_id !== getLoggedInUserData().user_id
      ) {
        unwatchGame(game_id).then((response) => {
          if (!response.data.success) {
            // TODO: Handle error with Toasts
            console.log("Unable to unWatch Game: ", response.data.message);
          }
        });
      }
    };
  }, []);

  if (canCallCentrifuge && gameData) {
    CentrifugeSetup(game_id, (ctx) => {
      const websocket = ctx;
      switch (ctx.data.event) {
        case "join_game":
          // completed - DO NOT EDIT!!
          setGameData({ ...gameData, opponent: websocket.data.player });
          break;

        case "piece_moved":
          // completed - DO NOT EDIT!!
          gameData.moves.push(websocket.data.move);
          setGameData({ ...gameData, moves: gameData.moves });
          break;

        case "spectator_joined_game":
          // completed - DO NOT EDIT!!
          gameData.spectators.push(websocket.data.spectator);
          setGameData({ ...gameData, spectators: gameData.spectators });
          break;

        case "spectator_left_game": {
          // completed - DO NOT EDIT!!
          // Find Index of recently exited spectator in spectators array
          const index = gameData.spectators.findIndex((spectator) => {
            spectator.user_id == websocket.data.spectator.user_id;
          });
          // Check if user not a spectator, then just ignore the event
          if (index !== -1) {
            gameData.spectators.splice(index, 1);
            setGameData({ ...gameData, spectators: gameData.spectators });
          }
          break;
        }

        // NOT IN USE AGAIN !!!! _ GO annd Beat @odizee / @emeka if ou question it
        // case "end_game":
        //   break;

        case "comments":
          // completed - DO NOT EDIT!!
          gameData.messages.push(websocket.data.comment);
          setGameData({ ...gameData, messages: gameData.messages });
          break;

        default:
          console.log("centrifuge: event listener not listened for", ctx?.data);
          break;
      }
    });
    setcanCallCentrifuge(false);
  }

  if (canCallWatchGame && gameData) {
    if (
      gameData.owner.user_id !== getLoggedInUserData().user_id &&
      gameData.opponent?.user_id !== getLoggedInUserData().user_id
    ) {
      // Call the Watch Game Adapter
      watchGame(game_id).then((response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          console.log("Unable to Watch Game: ", response.data.message);
        }
      });
    }
    setcanCallWatchGame(false);
  }

  let BoardToRender = null;
  let SideBarToRender = null;

  // If GameData State has been set
  if (gameData !== null) {
    // If LoggedIn User is the owner of the Game
    if (gameData.owner?.user_id == getLoggedInUserData().user_id) {
      // Render the Chessboard with owner defaults
      BoardToRender = <ChessBoard type="owner" gameData={gameData} />;
      SideBarToRender = <SpectatorSideBar type="owner" gameData={gameData} />;
      // If LoggedIn User is the opponent in the Game
    } else if (gameData.opponent?.user_id == getLoggedInUserData().user_id) {
      // Render the Chessboard with opponent defaults
      BoardToRender = <ChessBoard type="opponent" gameData={gameData} />;
      SideBarToRender = (
        <SpectatorSideBar type="opponent" gameData={gameData} />
      );
    } else {
      // Render the ChessBoard with spectator type
      BoardToRender = <ChessBoard type="spectator" gameData={gameData} />;
      SideBarToRender = (
        <SpectatorSideBar type="spectator" gameData={gameData} />
      );
    }
  }

  return (
    <section className="main-game">
      <div className="main-chess">
        <Header gameData={gameData} />
        {BoardToRender}
      </div>
      {SideBarToRender}
    </section>
  );
}

export default React.memo(Game);
