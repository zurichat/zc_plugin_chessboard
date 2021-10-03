/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";

// Import CSS for this page
// import "./chessboard.css";
import styles from "./chessboard.module.css";

// Import style for this page
import { ChessboardContainer } from "./styles";
import back from "../../assets/chess-pieces/back.svg";
import left from "../../assets/chess-pieces/left.svg";
import right from "../../assets/chess-pieces/right.svg";

// Import Adapters
import {
  UpdatePieceMove,
  UpdateBotPieceMove,
  UpdateGameWinner,
} from "../../adapters/chessboard";
import { startGameWithBot } from "../../adapters/game";
import { getChessBotData, getLoggedInUserData } from "../../adapters/auth";

// Import Components
import Chess from "chess.js";
import Chessboard from "chessboardjsx";
import PlayerName from "../PlayerName";
import ChessBoardBorder from "../ChessBoardBorder";
import GameWinnerModal from "../Modals/GameWinnerModal";
import NextTurn from "../Modals/NextTurnModal/NextTurn";

function ChessBoard({ type, gameData }) {
  const initialIndex = -1;
  const [replayIndex, setReplayIndex] = useState(initialIndex);

  const game_id = gameData._id;
  const GameEngine = useRef(new Chess());

  const [moves, setMoves] = useState(gameData.moves);

  const players_to_color_map = {
    [gameData.owner.user_id]: gameData.owner.color,
    [gameData.opponent?.user_id]: gameData.opponent?.color,
  };

  // Allow spectators to be able to replay the game
  const handleMoveReplay = (move) => {
    switch (move) {
      case "-1":
        setReplayIndex(replayIndex - 1);
        break;

      case "+1":
        setReplayIndex(1 + replayIndex);
        break;

      default:
        setReplayIndex(-1);
        break;
    }
  };

  // Set Board Based On Replay Index
  useEffect(() => {
    if (Math.abs(replayIndex) !== moves.length + 1) {
      set_board_position(moves.at(replayIndex).position_fen);
    } else {
      set_board_position("start");
    }
  }, [replayIndex]);

  // Set Board Based On Moves from GameData
  const [board_position, set_board_position] = useState(
    gameData.moves.length > 0 ? gameData.moves.at(-1).position_fen : "start"
  );

  useEffect(() => {
    // Update Board and Engine on New Move
    GameEngine.current = new Chess(
      moves.length > 0 ? moves.at(-1).position_fen : undefined
    );
    set_board_position(GameEngine.current.fen());
  }, [moves]);

  const [squareStyles, setSquareStyles] = useState({});
  const [pieceSquare, setPieceSquare] = useState("");
  const [history, setHistory] = useState([]);

  const chessPieces = () => {
    return [
      { name: "bR", image: require("../../assets/chess-pieces/bR.svg") },
      { name: "bB", image: require("../../assets/chess-pieces/bB.svg") },
      { name: "bK", image: require("../../assets/chess-pieces/bK.svg") },
      { name: "bQ", image: require("../../assets/chess-pieces/bQ.svg") },
      { name: "bN", image: require("../../assets/chess-pieces/bN.svg") },
      { name: "bP", image: require("../../assets/chess-pieces/bP.svg") },
      { name: "wR", image: require("../../assets/chess-pieces/wR.svg") },
      { name: "wB", image: require("../../assets/chess-pieces/wB.svg") },
      { name: "wN", image: require("../../assets/chess-pieces/wN.svg") },
      { name: "wQ", image: require("../../assets/chess-pieces/wQ.svg") },
      { name: "wK", image: require("../../assets/chess-pieces/wK.svg") },
      { name: "wP", image: require("../../assets/chess-pieces/wP.svg") },
    ].reduce((a, c) => {
      a[c.name] = ({ squareWidth, isDragging }) => {
        return (
          <div
            style={{
              width: squareWidth,
              height: squareWidth,
              display: "grid",
              placeItems: "center",
              zIndex: "999",
            }}
          >
            <img
              style={{ height: "70%", width: "70%" }}
              src={c.image}
              alt={c.name}
            />
          </div>
        );
      };
      return a;
    }, {});
  };

  const calcWidth = ({ screenWidth, screenHeight }) => {
    return screenWidth < 560
      ? screenWidth * 0.8
      : screenWidth < 800
      ? screenWidth * 0.48
      : screenWidth < 1000
      ? screenWidth * 0.35
      : screenWidth < 1300
      ? screenWidth * 0.3
      : screenHeight < 650
      ? 350
      : 410;
  };

  const allowDrag = ({ piece, position }) => {
    if (
      GameEngine.current.game_over() ||
      GameEngine.current.turn() !==
        players_to_color_map[getLoggedInUserData().user_id]
    ) {
      return false;
    } else {
      return true;
    }
  };

  // Beginning of random
  const makeRandomMove = () => {
    let possibleMoves = GameEngine.current.moves();

    // game over - no possible moves, game has ended
    if (possibleMoves.length === 0) return;

    var randomIdx = Math.floor(Math.random() * possibleMoves.length);
    const move = GameEngine.current.move(possibleMoves[randomIdx]);

    // Using set timeout to delay the bot time to play
    setTimeout(function () {
      set_board_position(GameEngine.current.fen());

      // Piece Move API Call
      UpdateBotPieceMove(game_id, move, GameEngine.current.fen()).then(
        (response) => {
          if (!response.data.success) {
            // TODO: Handle error with Toasts
            // Update the Board with last move
          } else {
            setHistory(GameEngine.current.history({ verbose: true }));
          }
        }
      );
    }, 2500);
  };
  // End of random

  // Check if the opponent of this game is our chessbot
  if (gameData.opponent?.user_id === getChessBotData().user_id) {
    if (
      // Check if it's bot turn to play
      players_to_color_map[getChessBotData().user_id] ===
      GameEngine.current.turn()
    ) {
      // Delay for bot to think
      makeRandomMove();
    }
  }

  const onDrop = ({ sourceSquare, targetSquare, piece }) => {
    // see if the move is legal
    const move = GameEngine.current.move({
      piece,
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    // illegal move
    if (move === null) return;

    set_board_position(GameEngine.current.fen());

    // Piece Move API Call
    UpdatePieceMove(game_id, move, GameEngine.current.fen()).then(
      (response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          // Update the Board with last move
        } else {
          setHistory(GameEngine.current.history({ verbose: true }));
        }
      }
    );
  };

  // const onSquareClick = (square) => {
  //   squareStyling(square, history);
  //   setPieceSquare(square);

  //   const move = GameEngine.current.move({
  //     from: pieceSquare,
  //     to: square,
  //     promotion: "q",
  //   });

  //   if (move === null) return;

  //   set_board_position(GameEngine.current.fen());

  //   // Piece Move API Call
  //   UpdatePieceMove(game_id, move, GameEngine.current.fen()).then((response) => {
  //     if (!response.data.success) {
  //       // TODO: Handle error with Toasts
  //       // Update the Board with last move
  //     } else {
  //       setHistory(GameEngine.current.history({ verbose: true }));
  //       setPieceSquare("");
  //     }
  //   });
  // };

  // const onSquareRightClick = (square) => {
  //   setPieceSquare(square);
  //   squareStyling(square, history);
  // };

  const onMouseOverSquare = (square) => {
    // get list of possible moves for this square
    const moves = GameEngine.current.moves({
      square: square,
      verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    highlightSquare(square, squaresToHighlight);
  };

  const highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlight = [sourceSquare, ...squaresToHighlight].reduce((a, c) => {
      a[c] = {
        background:
          "radial-gradient(circle, #00b87c 25%, transparent 30%, transparent 100%)",
        borderRadius: "50%",
      };
      return { ...a, ...squareStyling(pieceSquare, history) };
    }, {});

    setSquareStyles({ ...squareStyles, ...highlight });
  };

  const onMouseOutSquare = () => {
    setSquareStyles(squareStyling(pieceSquare, history));
  };

  const squareStyling = (pieceSquare, history) => {
    const from = history.length && history[history.length - 1].from;
    const to = history.length && history[history.length - 1].to;

    return {
      [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      ...(history.length && {
        [from]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      }),
      ...(history.length && {
        [to]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      }),
    };
  };

  let gameWinner = null;
  if (GameEngine.current && GameEngine.current.in_checkmate() === true) {
    GameEngine.current.turn() === "w"
      ? (gameWinner = gameData.opponent)
      : (gameWinner = gameData.owner);

    // Winner Has Not Been Announced
    if (
      (gameData.status !== 2 &&
        gameData.owner.user_id !== getLoggedInUserData().user_id) ||
      gameData.opponent?.user_id !== getLoggedInUserData().user_id
    ) {
      // Update Game winner API Call (Announce Winner)
      UpdateGameWinner(game_id, gameWinner.user_id).then((response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          console.log("Error updating game winner");
        }
      });
    }
  }

  const SetBotAsPlayer2 = () => {
    startGameWithBot(game_id).then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        console.log("Unable to Join Game As Bot: ", response.data.message);
      }
    });
  };

  return (
    <>
      <ChessboardContainer>
        {GameEngine.current.turn() === "b" ? (
          <NextTurn color_to_play="black" />
        ) : (
          <NextTurn color_to_play="White" />
        )}

        {/* Only show the Play Bot Button If an opponent hasn't joined */}
        {type === "owner" && gameData.opponent === null && (
          <button
            style={{
              padding: "1rem 5rem",
              border: "none",
              color: "white",
              background: "#25364b",
            }}
            onClick={() => {
              SetBotAsPlayer2();
            }}
          >
            Play Bot
          </button>
        )}

        {players_to_color_map[getLoggedInUserData().user_id] == "b" ? (
          <PlayerName
            game_id={game_id}
            style={{}}
            name={gameData.owner.user_name}
            image_url={gameData.owner.image_url}
          />
        ) : (
          <PlayerName
            game_id={game_id}
            style={{ paddingBottom: "28px" }}
            name={gameData.opponent?.user_name}
            image_url={gameData.opponent?.image_url}
          />
        )}

        <div
          style={{
            display: "flex",
            zIndex: "10",
          }}
        >
          <div
            style={{
              position: "relative",
              border: "3px solid #E1B168",
              zIndex: "1",
            }}
          >
            <ChessBoardBorder />

            <Chessboard
              // Set custom Chess Pieces
              pieces={chessPieces()}
              // Automatically adjust the board size to the screen
              calcWidth={calcWidth}
              // Set Board Id
              id={`game_${game_id}`}
              // disables chessboard pieces movement on spectator screen
              draggable={type == "spectator" ? false : true}
              // Set the board to face player with his color
              orientation={
                players_to_color_map[getLoggedInUserData().user_id] == "b"
                  ? "black"
                  : "white"
              }
              // Setting the board Postion
              position={board_position}
              // Determine if the board can be moved by the player now
              allowDrag={allowDrag}
              // On Drop/Click (for game on mobile devices) Of A Piece On the Chess Board
              onDrop={onDrop}
              // When Mouse is hovered on a square, draw possible moves for the piece
              onMouseOverSquare={onMouseOverSquare}
              onMouseOutSquare={onMouseOutSquare}
              // Prop to manage the styling of the board squares
              squareStyles={squareStyles}
              // Custom Square styling for the board
              darkSquareStyle={{ backgroundColor: "#3D2F19" }}
              lightSquareStyle={{
                background:
                  "linear-gradient(262.27deg, #E1B168 -23.58%, rgba(189, 136, 48, 0.8) 112.36%)",
              }}
              // Allow click and move
              // onSquareClick={onSquareClick} // Commented out, cause it was allowing player one move player 2 pieces and vice versa
              // onSquareRightClick={onSquareRightClick} // Commented out, cause it was allowing player one move player 2 pieces and vice versa
              // Show Notations on the board
              showNotation={false}
            />
          </div>
        </div>

        {players_to_color_map[getLoggedInUserData().user_id] == "b" ? (
          <PlayerName
            style={{ paddingTop: "28px" }}
            name={gameData.opponent?.user_name}
            image_url={gameData.opponent?.image_url}
          />
        ) : (
          <PlayerName
            style={{ paddingTop: "28px" }}
            name={gameData.owner.user_name}
            image_url={gameData.owner.image_url}
          />
        )}

        <div
          style={{
            display: "flex",
            gap: "0.8em",
            width: "inherit",
            justifyContent: "center",
            marginBottom: ".5em",
          }}
        >
          {/* Back buttons  */}
          {moves.length + 1 > Math.abs(replayIndex) && (
            <button
              onClick={() => handleMoveReplay("-1")}
              className={`${styles.btn_back} ${styles.btn_replay}`}
            >
              <img src={left} alt="" style={{ width: "16px" }} />
              Back
            </button>
          )}

          {/* Replay Buttons */}
          {replayIndex !== -1 && (
            <button
              onClick={() => handleMoveReplay("0")}
              className={styles.btn_current}
            >
              <img src={back} alt="" style={{ width: "16px" }} />
              Reset to Live Game
            </button>
          )}

          {/* Forward Button  */}
          {-1 != replayIndex && (
            <button
              onClick={() => handleMoveReplay("+1")}
              className={`${styles.btn_forward} ${styles.btn_replay}`}
            >
              Forward
              <img src={right} alt="" style={{ width: "16px" }} />
            </button>
          )}
        </div>
      </ChessboardContainer>

      {gameWinner !== null ? <GameWinnerModal winner={gameWinner} /> : null}
    </>
  );
}

export default React.memo(ChessBoard);
