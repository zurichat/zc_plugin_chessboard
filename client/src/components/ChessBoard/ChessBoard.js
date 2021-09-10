/* eslint-disable no-undef */
import "./ChessBoard.css";
import Chessboard from "chessboardjsx";
import React, { useState, useEffect, useRef } from "react";
import Chess from "chess.js";
import { chessPieces } from "./chessPieces";
import PlayerName from "../PlayerName/PlayerName";

const ChessBoard = () => {
  const [fen, setFen] = useState("start");

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  }, []);

  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move === null) return;

    setFen(game.current.fen());
  };

  const calcWidth = ({ screenWidth, screenHeight }) => {
    return screenWidth < 560 ? 318 : 538;
  };

  const customPieces = () => {
    return chessPieces.reduce((a, c) => {
      a[c.name] = ({ squareWidth, isDragging }) => {
        return (
          <div
            style={{
              width: squareWidth,
              height: squareWidth,
              display: "grid",
              placeItems: "center"
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

  return (
    <>
      <div className="chessboard">
        <PlayerName style={{ width: "100%" }} name="Dejavu" />
        <Chessboard
          pieces={customPieces()}
          id="startPcos"
          position={fen}
          onDrop={onDrop}
          calcWidth={calcWidth}
          darkSquareStyle={{ backgroundColor: "#3D2F19" }}
          lightSquareStyle={{ backgroundColor: "#E1B168" }}
        />
        <PlayerName
          style={{ justifyContent: "flex-end", width: "100%" }}
          name="Bombos"
        />
      </div>
    </>
  );
};

export default ChessBoard;
