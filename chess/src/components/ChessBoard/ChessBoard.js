import "./ChessBoard.css";
import Chessboard from "chessboardjsx";
import React, { useState, useEffect, useRef } from "react";
import Chess from "chess.js";
import { chessPieces } from "./chessPieces";
import PlayerName from "../PlayerName/PlayerName";
import axios from "axios";
import ChessboardBorder from "../ChessboardBorder/ChessboardBorder";
import WaitingForPlayerTwo from "../Button/WaitingForPlayerTwo";

// import Centrifuge from "centrifuge";
import Portal from "../Modals/CongratulationsModal/Portal";

const ChessBoard = ({ type, gameData }) => {
  const [fen, setFen] = useState("start");
  const [gameId, setGameId] = useState(gameId);
  const [playerTurn, setPlayerTurn] = useState("w");
  const [playerIds, setPlayerIds] = useState({});
  // const centrifuge = new Centrifuge(
  //   "wss://realtime.zuri.chat/connection/websocket"
  // );

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
    // centrifuge.connect();
    // centrifuge.subscribe(gameId, ChannelEventsListener);
    getGames();
    
    setPlayerIds({
          w: gameData.data.owner.user_id,
          b: gameData.data.opponent.user_id,
        }); 
        setGameId(gameData.data._id);
  }, []);

  /////////////////////////////////// GAME END SECTION ///////////////////////////////////////////////////////////
      
      //Conditions on Game Over
      const gameOver = game.current && game.current.game_over();
      const nextMover = fen.split(" ")[1];
      
              

      // PERFORM ACTIONS ON GAME OVER
      let winner;
      if(gameOver) {
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
  
  const getGames = async () => {
    const response = await axios.get("https://chess.zuri.chat/api/v1/game/all");
  };

  const pieceMove = async (move) => {
    const body = {
      // user_id: playerId[playerTurn],
      position_fen: game.current.fen(),
      game_id: gameId,
      board_state: move,
    };
  //   const response = await axios.patch(
  //     "https://chess.zuri.chat/api/v1/game/piecemove",
  //     body
  //   );
  };

  const ChannelEventsListener = (ctx) => {
    const websocket = ctx;

    switch (ctx.data.event) {
      case "join_game":
        console.log("joined centrifuge");
        break;

      case "piece_moved":
        game.move(websocket.data.board_state);
        setFen(game.current.fen());
        console.log("move cemtrifuge");
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
    
    if (move === null) return;

    setFen(game.current.fen());
    setPlayerTurn(game.current.turn());
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

  
  return (
    <>
      <div className="chessboard">
        
        {gameData?.data?.status === 0 ? <WaitingForPlayerTwo/> : <PlayerName
        style={{ paddingBottom: "28px" }}
          
          name={gameData?.data?.opponent.user_name}/>}
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
            darkSquareStyle={{ backgroundColor: "#3D2F19" }}
            lightSquareStyle={{
              background:
                "linear-gradient(262.27deg, #E1B168 -23.58%, rgba(189, 136, 48, 0.8) 112.36%)",
            }}
            showNotation={false}
            // disables chessboard pieces movement on spectator screen
            draggable={type === "spectator" ? false : true}
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
