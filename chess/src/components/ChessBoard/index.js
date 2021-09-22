/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";

// Import CSS for this page
import "./chessboard.css";

// Import Adapters
import { UpdatePieceMove, UpdateGameWinner } from "../../adapters/chessboard";
import { getLoggedInUserData } from "../../adapters/auth";

// Import Components
import Chess from "chess.js";
import Chessboard from "chessboardjsx";
import PlayerName from "../PlayerName";
import ChessBoardBorder from "../ChessBoardBorder";
import GameWinnerModal from "../Modals/GameWinnerModal";
import axios from "axios";

function ChessBoard({ type, gameData }) {
  // Initiate the Chess Game Engine
  const GameEngine = useRef(null);
  const game_id = gameData._id;
  const players_to_color_map = {
    [gameData.owner.user_id]: gameData.owner.color,
    [gameData.opponent?.user_id]: gameData.opponent?.color,
  };

  // Get Latest Previous Board positon or Initialize the board position
  const [board_position, set_board_position] = useState(
    gameData.moves.length > 0 ? gameData.moves.at(-1).position_fen : "start"
  );
  const [color_to_play, set_color_to_play] = useState(null);
  const [squareStyles, setSquareStyles] = useState({});
  const [history, setHistory] = useState([]);
  const [pieceSquare, setPieceSquare] = useState(null);

  // State of Game Winner Modal
  const [gameWinner, setGameWinner] = useState(null);
  const [showGameWinnerModal, setShowGameWinnerModal] = useState(false);

  useEffect(() => {
    // Set Chess engine to use Previous Board positons or Initialize the new
    GameEngine.current = new Chess(
      // gameData.moves.length > 0 ? gameData.moves.at(-1).position_fen : ""
    );
    // end();

    // Set Color to play
    set_color_to_play(GameEngine.current.fen().split(" ")[1]);
  }, []);

  const end = async () => {
    const body = {
      user_id: "61490abde4b2aebf8ec8ceea",
      game_id: "player_one_user_id",
    };
    const res = await axios.patch("//localhost:5050/api/v1/game/end", body);
    console.log(res);
  };

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
    return screenWidth < 560 ? screenWidth * 0.85 : 475;
  };

  const allowDrag = ({ piece, position }) => {
    if (
      GameEngine.current.game_over() ||
      color_to_play != players_to_color_map[getLoggedInUserData().user_id]
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    const move = GameEngine.current.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    // illegal move
    if (move === null) return "snapback";

    set_board_position(GameEngine.current.fen());
    set_color_to_play(GameEngine.current.fen().split(" ")[1]);

    // Piece Move API Call
    UpdatePieceMove(game_id, move, GameEngine.current.fen()).then(
      (response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          console.log("Piece Move Not Successful: ", response.data.message);
        } else {
          // Update the Board with last move
          setHistory(GameEngine.current.history({ verbose: true }));
        }
      }
    );
  };

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

  const onSquareClick = (square) => {
    setPieceSquare(square);
    squareStyling(square, history);
    const move = GameEngine.current.move({
      from: pieceSquare,
      to: square,
      promorion: "q"
    });

    if (move === null) return;
    setPieceSquare("");
    set_board_position(GameEngine.current.fen());
    set_color_to_play(GameEngine.current.fen().split(" ")[1]);

    // Piece Move API Call
    UpdatePieceMove(game_id, move, GameEngine.current.fen()).then(
      (response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          console.log("Piece Move Not Successful: ", response.data.message);
        } else {
          // Update the Board with last move
          setHistory(GameEngine.current.history({ verbose: true }));
        }
      }
    );
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


  // if (GameEngine.current) {
  //   // Game Over Handler
  //   if (GameEngine.current.game_over() === true) {
  //     let winner;

  //     color_to_play === "w"
  //       ? (winner = gameData.opponent)
  //       : (winner = gameData.owner);

  //     setGameWinner({ winner });

  //     // Update Game winner API Call
  //     UpdateGameWinner(game_id, winner.user_id).then((response) => {
  //       if (!response.data.success) {
  //         // TODO: Handle error with Toasts
  //         console.log("Unable to Set Game Winner: ", response.data.message);
  //       } else {
  //         // setShowGameWinnerModal(true);
  //         console.log("winner", winner);
  //       }
  //     });
  //   }
  // }

  const gameOver = GameEngine.current && GameEngine.current.in_checkmate();
  const nextMover = board_position.split(" ")[1];
  
  // PERFORM ACTIONS ON GAME OVER
  let winner;
  if (gameOver) {
    nextMover === "w"
    ? (winner = gameData.opponent)
    : (winner = gameData.owner);
    
    UpdateGameWinner(game_id, winner.user_id).then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        console.log("Unable to Set Game Winner: ", response.data.message);
      } else {
        // setShowGameWinnerModal(true);
      }
    });
    
  
  }

  return (
    <>
      <div className="chessboard">
        <h1>rendering for: {type}</h1>
        <PlayerName
          style={{ paddingBottom: "28px" }}
          name={gameData.opponent?.user_name}
        />

        <div
          style={{
            justifyContent: "flex-start",
            position: "relative",
            border: "2px solid #E1B168",
          }}
        >
          <ChessBoardBorder />
          <Chessboard
            // Set custom Chess Pieces
            pieces={chessPieces()}
            // Automatically adjust the board size to the screen
            calcWidth={calcWidth}
            // Set Board Id
            id={`game_${gameData.user_id}`}
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
            // allowDrag={allowDrag}
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
            // Show Notations on the board
            showNotation={false}

            onSquareClick={onSquareClick}

          />
        </div>

        <PlayerName
          style={{ paddingTop: "28px", justifyContent: "flex-end" }}
          name={gameData.owner.user_name}
        />
      </div>

      {gameOver && <GameWinnerModal winner={winner} />}
    </>
  );
}

export default ChessBoard;
