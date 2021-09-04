import "./ChessBoard.css";
import Chessboard from "chessboardjsx";
import React, { useState, useEffect, useRef } from "react";
import Chess from "chess.js";
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

  return (
    <>
      <div className="chessboard">
        <PlayerName name="Dejavu" />
        <Chessboard
          width={438}
          id="startPos"
          position={fen}
          onDrop={onDrop}
          sparePieces={true}
          className="cboard"
        />
        <PlayerName style={{ justifyContent: "flex-end" }} name="Bombos" />
      </div>
    </>
  );
};

export default ChessBoard;
