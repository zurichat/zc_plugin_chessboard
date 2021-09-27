/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";

// Import CSS for this page
// import "./chessboard.css";

// Import style for this page
import { ChessboardContainer } from "./styles";

// Import Adapters
import { UpdatePieceMove, UpdateGameWinner } from "../../adapters/chessboard";
import { getLoggedInUserData } from "../../adapters/auth";

// Import Components
import Chess from "chess.js";
import Chessboard from "chessboardjsx";
import PlayerName from "../PlayerName";
import ChessBoardBorder from "../ChessBoardBorder";
import GameWinnerModal from "../Modals/GameWinnerModal";

function ChessBoard({ type, gameData }) {
  const game_id = gameData._id;

  // Restore or initiate Game From Chess Engine
  const GameEngine = new Chess(
    gameData.moves.length > 0 ? gameData.moves.at(-1).position_fen : undefined
  );

  const players_to_color_map = {
    [gameData.owner.user_id]: gameData.owner.color,
    [gameData.opponent?.user_id]: gameData.opponent?.color,
  };

  const [board_position, set_board_position] = useState(
    gameData.moves.length > 0 ? gameData.moves.at(-1).position_fen : "start"
  );
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
    return screenWidth < 560 ? screenWidth * 0.85 : 475;
  };

  const allowDrag = ({ piece, position }) => {
    if (
      GameEngine.game_over() ||
      GameEngine.turn() !== players_to_color_map[getLoggedInUserData().user_id]
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onDrop = ({ sourceSquare, targetSquare, piece }) => {
    // see if the move is legal
    const move = GameEngine.move({
      piece,
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    // illegal move
    if (move === null) return;

    set_board_position(GameEngine.fen());

    // Piece Move API Call
    UpdatePieceMove(game_id, move, GameEngine.fen()).then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        // Update the Board with last move
      } else {
        setHistory(GameEngine.history({ verbose: true }));
        squareStyling({ pieceSquare, history });
      }
    });
  };

  // const onSquareClick = (square) => {
  //   squareStyling(square, history);
  //   setPieceSquare(square);

  //   const move = GameEngine.move({
  //     from: pieceSquare,
  //     to: square,
  //     promotion: "q",
  //   });

  //   if (move === null) return;

  //   set_board_position(GameEngine.fen());

  //   // Piece Move API Call
  //   UpdatePieceMove(game_id, move, GameEngine.fen()).then((response) => {
  //     if (!response.data.success) {
  //       // TODO: Handle error with Toasts
  //       // Update the Board with last move
  //     } else {
  //       setHistory(GameEngine.history({ verbose: true }));
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
    const moves = GameEngine.moves({
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
  if (GameEngine && GameEngine.in_checkmate() === true) {
    GameEngine.turn() === "w"
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

  return (
    <>
      <ChessboardContainer>
        <h4
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            paddingTop: "1rem",
          }}
        >
          {" "}
          Game {type.charAt(0).toUpperCase() + type.slice(1)} Mode
        </h4>

        {players_to_color_map[getLoggedInUserData().user_id] == "b" ? (
          <PlayerName
            style={{ paddingBottom: "28px" }}
            name={gameData.owner.user_name}
            image_url={gameData.owner.image_url}
          />
        ) : (
          <PlayerName
            style={{ paddingBottom: "28px" }}
            name={gameData.opponent?.user_name}
            image_url={gameData.opponent?.image_url}
          />
        )}

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

        {players_to_color_map[getLoggedInUserData().user_id] == "b" ? (
          <PlayerName
            style={{ paddingBottom: "28px" }}
            name={gameData.opponent?.user_name}
            image_url={gameData.opponent?.image_url}
          />
        ) : (
          <PlayerName
            style={{ paddingBottom: "28px" }}
            name={gameData.owner.user_name}
            image_url={gameData.owner.image_url}
          />
        )}

      </ChessboardContainer>
      {gameWinner !== null ? <GameWinnerModal winner={gameWinner} /> : null}
    </>
  );
}

export default React.memo(ChessBoard);
