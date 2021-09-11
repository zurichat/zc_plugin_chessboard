import "./ChessBoard.css";
import Chessboard from "chessboardjsx";
import React, { useState, useEffect, useRef } from "react";
import Chess from "chess.js";
import { chessPieces } from "./chessPieces";
import PlayerName from "../PlayerName/PlayerName";
import axios from "axios";
import ChessboardBorder from "./../Notations/ChessboardBorder";

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
    return screenWidth < 560 ? screenWidth * .85 : 538;
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
              placeItems: "center",
              zIndex:"999"
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

  const numbers = "12345678";

  return (
    <>
      <div className="chessboard" >
        <PlayerName style={{ width: "100%" }} name="Dejavu" />
        <div style={{
          position: "relative",
          border: "1px solid #CD9B49",
        }} >


          <ChessboardBorder />
          <Chessboard
            pieces={customPieces()}
            id="startPcos"
            position={fen}
            onDrop={onDrop}
            calcWidth={calcWidth}
            darkSquareStyle={{ backgroundColor: "#3D2F19" }}
            lightSquareStyle={{ background: "linear-gradient(262.27deg, #E1B168 -23.58%, rgba(189, 136, 48, 0.8) 112.36%)" }}
            showNotation={false}
          />
        </div>

        <PlayerName
          style={{ justifyContent: "flex-end", width: "100%" }}
          name="Bombos"
        />
      </div>
    </>
  );
};

export default ChessBoard;
