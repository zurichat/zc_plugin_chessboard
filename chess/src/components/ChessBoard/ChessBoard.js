import "./ChessBoard.css";
import Chessboard from "chessboardjsx";
import React, { useState, useEffect, useRef } from "react";
import Chess from "chess.js";
import { chessPieces } from "./chessPieces";
import PlayerName from "../PlayerName/PlayerName";
import axios from "axios";
import ChessboardBorder from "../ChessboardBorder/ChessboardBorder";
import Centrifuge from "centrifuge";
import WaitingForPlayerTwo from "./../Button/WaitingForPlayerTwo";
import Portal from "./../Modals/CongratulationsModal/Portal";

let loggedInUser;

const userData = {
  owner: {
    user_id: "d1a0686b-604d-4e65-9369-d46c30629c45",
    user_name: "Marjorie",
    color: "w",
  },
  opponent: {
    user_id: "085fc3b2-b936-4eb2-8217-fcc5c0a33168",
    user_name: "Pansie",
    color: "b",
  },
};


const ChessBoard = ({ type, loggedIn, gameData }) => {
  // console.log(loggedIn);
  const [fen, setFen] = useState("start");
  const [gameId, setGameId] = useState("6145e91a285e4a18402074ac");
  const [squareStyles, setSquareStyles] = useState("");
  const [pieceSquare, setPieceSquare] = useState("");
  const [history, setHistory] = useState("");
  const [playerTurn, setPlayerTurn] = useState(userData.owner.user_id);
  const centrifuge = new Centrifuge(
    "wss://realtime.zuri.chat/connection/websocket"
    // "ws://localhost:8000/connection/websocket"
  );
  
  centrifuge.on("connect", (ctx) => {
    console.log(ctx, "connected");
  });
  
  let game = useRef(null);
  
  useEffect(() => {
    loggedInUser = loggedIn;
    game.current = new Chess();
    centrifuge.connect();
    centrifuge.subscribe(gameId, ChannelEventsListener);
  }, []);
  
  const gameOver = game.current && game.current.game_over(); 
  const hightLightSquare = (squares) => {
    const highLight = squares.reduce((a, c) => {
      a[c] = {
        background: "radial-gradient(circle, rgb(255, 255, 255, 0.5) 25%, transparent 30%, transparent 100%)",
        borderRadius: "50%"
      };
      return { ...a, ...squareClickStyling(pieceSquare, history) };
    }, {});

    setSquareStyles({ ...squareStyles, ...highLight });
  };

  const onMouseOverSquare = (square) => {
    const moves = game.current.moves({
      square: square,
      verbose: true
    });

    const sqaureToHighlight = [];

    if (moves.length === 0) return;
    moves.forEach(move => sqaureToHighlight.push(move.to));
    hightLightSquare([square, ...sqaureToHighlight]);
  };

  const onMouseOutSquare = () => {
    setSquareStyles(squareClickStyling(pieceSquare, history));
  };

  const onSquareClick = (square) => {
    setPieceSquare(square);
    squareClickStyling(square, history);
    const move = game.current.move({
      from: pieceSquare,
      to: square,
      promorion: "q"
    });

    if (move === null) return;
    pieceMove(move);
    setFen(game.current.fen());
    setHistory(game.current.history({ verbose: true }));
    setPieceSquare("");
  };

  const squareClickStyling = (pieceSquare, history) => {
    const from = history.length && history[history.length - 1].from;
    const to = history.length && history[history.length - 1].to;

    return {
      [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      ...(history.length && { [from]: { backgroundColor: "rgba(255, 255, 0, 0.4)" } }),
      ...(history.length && { [to]: { backgroundColor: "rgba(255, 255, 0, 0.4)" } }),
    };

  };

  const pieceMove = async (move) => {
    const body = {
      user_id: loggedInUser.user_id,
      position_fen: game.current.fen(),
      game_id: gameId,
      board_state: move,
    };
    const response = await axios.patch(
      "https://chess.zuri.chat/api/v1/game/piecemove",
      //"https://chess.zuri.chat/api/v1/game/piecemove",
      body
    );

    // console.log("move", response);
  };

  const ChannelEventsListener = (ctx) => {

    switch (ctx.data.event) {
      case "piece_moved":
        game.current.move(ctx.data.board_state);
        setFen(game.current.fen());
        console.log(ctx.data.nextPlayerId);  
        setPlayerTurn(ctx.data.nextPlayerId);
        break;

      default:
        console.log("default");
        break;
    }
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
    });
    console.log(playerTurn);
 

    // console.log(loggedInUser);
    // console.log(playerTurn);
    if (move === null) return;

    // console.log(loggedInUser.user_name);

    setFen(game.current.fen());
    setHistory(game.current.history({ verbose: true }));
    pieceMove(move);
  };


  const calcWidth = ({ screenWidth, screenHeight }) => {
    return screenWidth < 560 ? screenWidth * 0.85 : 475;
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

  const modalRef = useRef();
  
  return (
    <>
      <div className="chessboard">
        <PlayerName
          style={{ paddingBottom: "28px" }}
          name={gameData?.data?.owner?.user_name}
        />
        <div
          style={{
            justifyContent: "flex-start",
            position: "relative",
            border: "1px solid #CD9B49",
          }}
        >
          <ChessboardBorder />
          <Chessboard
            pieces={customPieces()}
            id="startPcos"
            position={fen}
            onMouseOverSquare={onMouseOverSquare}
            onMouseOutSquare={onMouseOutSquare}
            squareStyles={squareStyles}
            onSquareClick={onSquareClick}
            onDrop={onDrop}
            calcWidth={calcWidth}
            darkSquareStyle={{ backgroundColor: "#3D2F19" }}
            lightSquareStyle={{
              background:
                "linear-gradient(262.27deg, #E1B168 -23.58%, rgba(189, 136, 48, 0.8) 112.36%)",
            }}
            showNotation={false}
            // disables chessboard pieces movement on spectator screen
            draggable={
              type === "spectator" ? false  : true
            }
          />
        </div>

        {gameData?.data?.status === 0 ? <WaitingForPlayerTwo/> : <PlayerName
          style={{ paddingTop: "28px", justifyContent: "flex-end" }}
          name={gameData?.data?.opponent.user_name}/>}
      </div>
      {gameOver && <Portal ref={modalRef}/>}

    </>
  );
};

export default ChessBoard;
