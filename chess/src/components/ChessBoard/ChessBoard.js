import "./ChessBoard.css";
import Chessboard from "chessboardjsx";
import React, { useState, useEffect, useRef } from "react";
import Chess from "chess.js";
import { chessPieces } from "./chessPieces";
import PlayerName from "../PlayerName/PlayerName";
import axios from "axios";
import ChessboardBorder from "../ChessboardBorder/ChessboardBorder";
import WaitingForPlayerTwo from "../Button/WaitingForPlayerTwo";

import Centrifuge from "centrifuge";
import Portal from "../Modals/CongratulationsModal/Portal";

const ChessBoard = ({ type, gameData }) => {
  const [fen, setFen] = useState("start");
  const [gameId, setGameId] = useState(gameId);
  const [playerTurn, setPlayerTurn] = useState("w");
  const [playerIds, setPlayerIds] = useState({});
  const [squareStyles, setSquareStyles] = useState("");
  const [pieceSquare, setPieceSquare] = useState("");
  const [history, setHistory] = useState("");

  // Centrifugee Stuffss
  const centrifuge = new Centrifuge(
        "ws://localhost:8000/connection/websocket"

  );
  const game = useRef(null);
  centrifuge.on("connect", (ctx) => {
    console.log(ctx, "connected");
  });


  useEffect(() => {
    game.current = new Chess();
    setPlayerIds({
      w: gameData.data.owner.user_id,
      b: gameData.data.opponent.user_id,
    });
    setGameId(gameData.data._id);

    // Connect to Centrigo
    centrifuge.connect();
    // centrifuge.onConnect(() => { console.log("connected");});

    // Subsctibe to the GameID room on centrifugo
    centrifuge.subscribe(gameData.data._id, ChannelEventsListener);
  }, []);

  const ChannelEventsListener = (ctx) => {
    const websocket = ctx;

    switch (ctx.data.event) {
      case "join_game":
        console.log("someone centrifuge");
        break;

      case "piece_moved":
        console.log("a player moved a piece");
        game.current.move(websocket.data.board_state);
        setFen(game.current.fen());
        break;

      case "spectator_joined_game":
        // New Specator Joined Game Code Here
        console.log("spectator joined");
        break;
      
      case "spectator_left_game":
        // New Specator Joined Game Code Here
        console.log("a spectator left the game");
        break;

      case "end_game":
        // The Game Has been ended by one of the players
        break;

      case "comments":
        // New Comment added
        break;

      default:
        console.log("default");
        break;
    }
  };

  /////////////////////////////////// GAME END SECTION ///////////////////////////////////////////////////////////

  //Conditions on Game Over
  const gameOver = game.current && game.current.game_over();
  const nextMover = fen.split(" ")[1];

  // PERFORM ACTIONS ON GAME OVER
  let winner;
  if (gameOver) {
    playerTurn === "w" ? winner = gameData.data.opponent : winner = gameData.data.owner;


    const end = async () => {
      const gameEndData = {
        user_id: winner.user_id,
        game_id: gameId
      };

      const result = await axios.patch(
        "https://chess.zuri.chat/api/v1/game/end",
        gameEndData
      );
    };
    end();
  }

  /////////////////////////////////// END OF GAME END SECTION ///////////////////////////////////////////////////////////



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
      user_id: playerIds[playerTurn],
      position_fen: game.current.fen(),
      game_id: gameId,
      board_state: move,
    };

    const response = await axios.patch(
      "https://chess.zuri.chat/api/v1/game/piecemove",
      body
    );
    console.log(response);
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move === null) return;

    setFen(game.current.fen());
    setHistory(game.current.history({ verbose: true }));
    setPlayerTurn(game.current.turn());
    pieceMove(move);
  };

  console.log(playerTurn);

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

  return (
    <>
      <div className="chessboard">

        {gameData?.data?.status === 0 ? <WaitingForPlayerTwo /> : <PlayerName
          style={{ paddingBottom: "28px" }}

          name={gameData?.data?.opponent.user_name} />}
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
            onDrop={onDrop}
            calcWidth={calcWidth}
            onMouseOverSquare={onMouseOverSquare}
            onMouseOutSquare={onMouseOutSquare}
            squareStyles={squareStyles}
            onSquareClick={onSquareClick}
            darkSquareStyle={{ backgroundColor: "#3D2F19" }}
            lightSquareStyle={{
              background:
                "linear-gradient(262.27deg, #E1B168 -23.58%, rgba(189, 136, 48, 0.8) 112.36%)",
            }}
            showNotation={false}
            // disables chessboard pieces movement on spectator screen
            draggable={
              type === "spectator" ? false: true
            }
          />
        </div>

        <PlayerName
          style={{ paddingTop: "28px", justifyContent: "flex-end" }}
          name={gameData?.data?.owner?.user_name}
        />
      </div>
      {gameOver && <Portal champ={winner.user_name} />}
    </>
  );
};

export default ChessBoard;
